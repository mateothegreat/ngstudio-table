import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { TableConfig } from './table-config';
import { TableInstance } from './table-instance';
import { TableComponent } from './table.component';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    public instances: { [name: string]: TableInstance } = {};

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string, viewContainerRef: ViewContainerRef, config: TableConfig): TableInstance {

        const instance = this.dynamicComponentFactoryService.createInContainer('tabs', viewContainerRef, TableComponent);

        this.instances[name] = new TableInstance({

            name,
            config

        });

        instance.componentRef.instance.instance = this.instances[name];

        return this.instances[name];

    }

}
