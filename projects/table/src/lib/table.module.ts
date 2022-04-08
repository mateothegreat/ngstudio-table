import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderCellComponent } from './header/header-cell/header-cell.component';
import { HeaderComponent } from './header/header.component';
import { RowCellComponent } from './row/row-cell/row-cell.component';
import { RowComponent } from './row/row.component';
import { TableComponent } from './table.component';
import { RowCellActionsComponent } from './row/row-cell/row-cell-actions/row-cell-actions.component';

@NgModule({

    declarations: [

        TableComponent,
        RowComponent,
        HeaderComponent,
        HeaderCellComponent,
        RowCellComponent,
        RowCellActionsComponent

    ],

    imports: [

        CommonModule

    ],

    exports: [

        TableComponent

    ]

})
export class TableModule {
}
