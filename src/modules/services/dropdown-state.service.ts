import { Injectable } from '@angular/core';
import { Ng4DropdownState } from './ng4-dropdown-state';

@Injectable()
export class DropdownStateService {
    public menuState = {
        isVisible: <boolean>false,
        toString(): string {
            return this.isVisible === true ? 'visible' : 'hidden';
        }
    };

    public dropdownState: Ng4DropdownState = new Ng4DropdownState();
}
