import {
    Component
} from '@angular/core';


@Component({
    selector: 'dropdown-container',
    providers: [ ],
    template: `<ng4-dropdown>
                    <ng4-dropdown-button>Open</ng4-dropdown-button>
                    <ng4-dropdown-menu>
                        <ng4-menu-item *ngFor="let option of options" [value]="option">
                            {{ option.value }}
                        </ng4-menu-item>
                    </ng4-dropdown-menu>
               </ng4-dropdown>`
})
export class DropdownContainer {
    options = [{value: 'me'}];
}
