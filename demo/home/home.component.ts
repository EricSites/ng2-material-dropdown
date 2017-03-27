import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})

export class HomeComponent {
    pages = [ 'Home', 'Explore', 'Help' ];
    constructor() {

    }

    ngOnInit() {

    }
}
