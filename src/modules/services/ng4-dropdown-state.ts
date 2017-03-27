import { EventEmitter } from '@angular/core';
import { Ng4MenuItem } from '../components/menu-item/ng4-menu-item';

export class Ng4DropdownState {
    public onItemSelected: EventEmitter<Ng4MenuItem> = new EventEmitter<Ng4MenuItem>();
    public onItemClicked: EventEmitter<Ng4MenuItem> = new EventEmitter<Ng4MenuItem>();
    private _selectedItem: Ng4MenuItem;

    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     * @returns {Ng4MenuItem}
     */
    public get selectedItem(): Ng4MenuItem {
        return this._selectedItem;
    }

    /**
     * @name selects a menu item and emits event
     * @param item {Ng4MenuItem}
     * @param dispatchEvent {boolean}
     */
    public select(item: Ng4MenuItem, dispatchEvent = true): void {
        this._selectedItem = item;

        if (!dispatchEvent) {
            return;
        }

        item.focus();

        this.onItemSelected.emit(item);
    }

    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    public unselect(): void {
        this._selectedItem = undefined;
    }
}
