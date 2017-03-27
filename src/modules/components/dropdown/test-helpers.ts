import { Component, NgModule } from '@angular/core';
import { Ng4DropdownModule } from '../../ng4-dropdown.module';

@Component({
    selector: 'basic-dropdown',
    template: `
        <main>
        <ng4-dropdown>
            <ng4-dropdown-button>
                Open
            </ng4-dropdown-button>
            <ng4-dropdown-menu [focusFirstElement]="true">
                <ng4-menu-item>
                    First item
                </ng4-menu-item>
                <ng4-menu-item [preventClose]="true">
                    Second item
                </ng4-menu-item>
            </ng4-dropdown-menu>
        </ng4-dropdown>
        </main>
    `
})
export class BasicDropdown {
    ngOnInit() {}
}

@NgModule({
    declarations: [
        BasicDropdown
    ],
    imports: [Ng4DropdownModule],
    exports: [BasicDropdown]
})
export class TestModule {}
