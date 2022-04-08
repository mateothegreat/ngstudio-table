import { Type } from '@angular/core';
import { TableRowAction } from './table-row-action';

export class TableCell {

    public name: string;
    public label?: string;
    public width?: string;
    public headerComponentType?: Type<any>;
    public cellComponentType?: Type<any>;
    public actions?: Array<TableRowAction> = [];
    public theme?: any;

}
