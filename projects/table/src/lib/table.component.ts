import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TableInstance } from './table-instance';

@Component({
    selector: 'lib-table',
    templateUrl: './table.component.html',
    styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements AfterViewInit {

    public instance: TableInstance;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef) {

        changeDetectorRef.detach();

    }

    public ngAfterViewInit() {

        setTimeout(() => {

            this.changeDetectorRef.reattach();
            this.changeDetectorRef.detectChanges();

        });

    }

}
