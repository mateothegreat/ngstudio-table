export class TableRowAction {

    public name?: string;
    public iconClass: string;
    public color?: string;

    public constructor(action: TableRowAction) {

        Object.assign(this, action);

    }

}
