import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { TableCell } from '../../table-cell';
import { TableInstance } from '../../table-instance';

@Component({
    selector: 'lib-header-cell',
    templateUrl: './header-cell.component.html',
    styleUrls: [ './header-cell.component.scss' ]
})
export class HeaderCellComponent implements OnInit, AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;

    @Input() public instance: TableInstance;
    @Input() public cell: TableCell;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef,
                       private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

        changeDetectorRef.detach();
    }

    public ngOnInit() {

        this.changeDetectorRef.detectChanges();

    }

    public ngAfterViewInit() {

        if (this.cell?.headerComponentType) {

            this.changeDetectorRef.detectChanges();

            const instance = this.dynamicComponentFactoryService.createInContainer(this.cell.name, this.viewContainerRef, this.cell.headerComponentType);

            instance.componentRef.instance['cell'] = this.cell;

        }

        setTimeout(() => {

            this.changeDetectorRef.reattach();
            this.changeDetectorRef.detectChanges();

        });

    }

}
