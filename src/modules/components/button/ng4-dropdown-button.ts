import {
    Component,
    Output,
    Input,
    EventEmitter,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'ng4-dropdown-button',
    styleUrls: [ './style.scss' ],
    templateUrl: './template.html'
})
export class Ng4DropdownButton {
    @Output() public onMenuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public showCaret = true;

    constructor(private element: ElementRef) {}

    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */
    public toggleMenu(): void {
        this.onMenuToggled.emit(true);
    }

    /**
     * @name getPosition
     * @desc returns position of the button
     * @returns {ClientRect}
     */
    public getPosition(): ClientRect {
      return this.element.nativeElement.getBoundingClientRect();
    }
}
