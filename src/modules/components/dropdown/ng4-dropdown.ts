import {
    HostListener,
    Component,
    ContentChild,
    Output,
    EventEmitter,
    Input
} from '@angular/core';

import { Ng4DropdownButton } from '../button/ng4-dropdown-button';
import { Ng4DropdownMenu } from '../menu/ng4-dropdown-menu';
import { DropdownStateService } from '../../services/dropdown-state.service';

@Component({
    selector: 'ng4-dropdown',
    templateUrl: './template.html',
    providers: [ DropdownStateService ]
})
export class Ng4Dropdown {
    // get children components
    @ContentChild(Ng4DropdownButton) public button: Ng4DropdownButton;
    @ContentChild(Ng4DropdownMenu) public menu: Ng4DropdownMenu;

    @Input() public dynamicUpdate = true;

    // outputs
    @Output() public onItemClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onItemSelected: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onShow: EventEmitter<Ng4Dropdown> = new EventEmitter<Ng4Dropdown>();
    @Output() public onHide: EventEmitter<Ng4Dropdown> = new EventEmitter<Ng4Dropdown>();

    constructor(private state: DropdownStateService) {}

    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    public toggleMenu(position = this.button.getPosition()): void {
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    }

    /**
     * - hides dropdown
     * @name hide
     */
    public hide(): void {
        this.menu.hide();
        this.onHide.emit(this);
    }

    /**
     * - shows dropdown
     * @name show
     * @param position
     */
    public show(position = this.button.getPosition()): void {
        this.menu.show();

        // update menu position based on its button's
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    }

    /**
     * @name scrollListener
     */
    @HostListener('window:scroll')
    public scrollListener() {
        if (this.state.menuState.isVisible && this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition());
        }
    }

    public ngOnInit() {
        this.state.dropdownState.onItemClicked.subscribe(item => {
            this.onItemClicked.emit(item);

            if (item.preventClose) {
                return;
            }

            this.hide.call(this);
        });

        if (this.button) {
            this.button.onMenuToggled.subscribe(() => {
                this.toggleMenu();
            });
        }

        this.state.dropdownState.onItemSelected.subscribe(item => this.onItemSelected.emit(item));
    }
}
