import { Ng4Dropdown } from './components/dropdown/ng4-dropdown';
import { Ng4DropdownMenu } from './components/menu/ng4-dropdown-menu';
import { Ng4DropdownButton } from './components/button/ng4-dropdown-button';
import { Ng4MenuItem } from './components/menu-item/ng4-menu-item';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownStateService } from './services/dropdown-state.service';

@NgModule({
    exports: [
        Ng4MenuItem,
        Ng4DropdownButton,
        Ng4DropdownMenu,
        Ng4Dropdown
    ],
    declarations: [
        Ng4Dropdown,
        Ng4MenuItem,
        Ng4DropdownButton,
        Ng4DropdownMenu,
    ],
    imports: [ CommonModule, BrowserAnimationsModule ]
})
export class Ng4DropdownModule {}

export {
    Ng4Dropdown,
    Ng4DropdownMenu,
    Ng4MenuItem,
    Ng4DropdownButton,
    DropdownStateService
}
