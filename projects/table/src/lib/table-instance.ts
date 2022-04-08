import { Subject } from 'rxjs';
import { TableClick } from './table-click';
import { TableConfig } from './table-config';

export class TableInstance {

    public name: string;
    public config: TableConfig;
    public click$?: Subject<TableClick> = new Subject();

    public constructor(instance: TableInstance) {

        Object.assign(this, instance);

    }

}
