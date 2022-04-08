import { Component, Input } from '@angular/core';
import { TableCell } from '../../../table-cell';
import { TableClickEvent } from '../../../table-click-event';
import { TableInstance } from '../../../table-instance';
import { TableRowAction } from '../../../table-row-action';

@Component({
    selector: 'lib-row-cell-actions',
    templateUrl: './row-cell-actions.component.html',
    styleUrls: [ './row-cell-actions.component.scss' ]
})
export class RowCellActionsComponent {

    @Input() public instance: TableInstance;
    @Input() public cell: TableCell;
    @Input() public row: any;
    @Input() public data: any;

    public onActionClick(action: TableRowAction): void {

        this.instance.click$.next({

            event: TableClickEvent.ACTION,
            row: this.row,
            cell: this.cell,
            data: action

        });

    }

}
