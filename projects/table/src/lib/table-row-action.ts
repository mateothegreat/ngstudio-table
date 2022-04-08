export class TableRowAction {

    public iconClass: string;
    public color?: string;

    public constructor(action: TableRowAction) {

        Object.assign(this, action);

    }

}
