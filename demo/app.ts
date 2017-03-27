import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { Ng4DropdownModule } from '../src/modules/ng4-dropdown.module';

@NgModule({
    imports: [ BrowserModule, Ng4DropdownModule ],
    bootstrap: [ HomeComponent ],
    declarations: [ HomeComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
