import { TableCell } from './table-cell';
import { TableRowAction } from './table-row-action';

export class TableRow {

    public cells: Array<TableCell>;
    public actions?: Array<TableRowAction>;

    public constructor(actions: TableRow) {

        Object.assign(this, actions);

        for (let i = 0; i < actions.actions.length; i++) {

            this.actions.push(new TableRowAction(actions.actions[i]));

        }

    }

}
