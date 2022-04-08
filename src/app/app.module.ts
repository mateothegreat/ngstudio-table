import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from '../../projects/table/src/lib/table.module';

import { AppComponent } from './app.component';
import { CellAComponent } from './cell-a/cell-a.component';
import { HeaderComponent } from './header/header.component';

@NgModule({

    declarations: [

        AppComponent,
         CellAComponent,
         HeaderComponent

    ],

    imports: [

        BrowserModule,
        TableModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
