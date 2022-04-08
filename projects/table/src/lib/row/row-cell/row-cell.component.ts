import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { TableCell } from '../../table-cell';
import { TableClickEvent } from '../../table-click-event';
import { TableInstance } from '../../table-instance';

@Component({
    selector: 'lib-row-cell',
    templateUrl: './row-cell.component.html',
    styleUrls: [ './row-cell.component.scss' ]
})
export class RowCellComponent implements OnInit, AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;

    @Input() public instance: TableInstance;
    @Input() public cell: TableCell;
    @Input() public row: any;
    @Input() public data: any;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef,
                       private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

        changeDetectorRef.detach();
    }

    public ngOnInit() {

        this.changeDetectorRef.detectChanges();

    }

    public ngAfterViewInit() {

        if (this.cell?.cellComponentType) {

            this.changeDetectorRef.detectChanges();

            const instance = this.dynamicComponentFactoryService.createInContainer(this.cell.name, this.viewContainerRef, this.cell.cellComponentType);

            instance.componentRef.instance['cell'] = this.cell;
            instance.componentRef.instance['data'] = this.data;

        }

        setTimeout(() => {

            this.changeDetectorRef.reattach();

        });

    }

    public onCellClick(): void {

        this.instance.click$.next({

            event: TableClickEvent.CELL,
            row: this.row,
            cell: this.cell,
            data: this.data

        });

    }

}
