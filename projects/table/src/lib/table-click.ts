import { TableCell } from './table-cell';
import { TableClickEvent } from './table-click-event';

export interface TableClick {

    event: TableClickEvent;
    row: any;
    cell: TableCell;
    data: any;

}
