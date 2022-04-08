import { TableRowAction } from './table-row-action';

export class TableRowActions {

    public actions: Array<TableRowAction> = [];

    public constructor(actions: TableRowActions) {

        Object.assign(this, actions);

        for (let i = 0; i < actions.actions.length; i++) {

            this.actions.push(new TableRowAction(actions.actions[i]));

        }

    }

}
