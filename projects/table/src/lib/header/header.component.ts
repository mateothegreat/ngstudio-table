import { Component, Input } from '@angular/core';
import { TableInstance } from '../table-instance';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

    @Input() public instance: TableInstance;

}
