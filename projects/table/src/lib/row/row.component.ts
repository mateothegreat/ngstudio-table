import { Component, Input } from '@angular/core';
import { TableInstance } from '../table-instance';

@Component({
    selector: 'lib-row',
    templateUrl: './row.component.html',
    styleUrls: [ './row.component.scss' ]
})
export class RowComponent {

    @Input() public row: any;
    @Input() public instance: TableInstance;

}
