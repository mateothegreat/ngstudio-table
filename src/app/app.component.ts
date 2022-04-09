import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TableService } from '../../projects/table/src/lib/table.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    @ViewChild('table', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;

    public constructor(private readonly tableService: TableService) {

    }

    public ngAfterViewInit() {

        const data$: ReplaySubject<Array<any>> = new ReplaySubject();
        data$.next([

            {

                a: 1,
                b: '2 asdfasdfasdf asdfa'

            }, {

                a: 3,
                b: '4a sdfadsf'

            }
        ]);

        const table = this.tableService.open('one', this.viewContainerRef, {

            header: [

                {

                    name: 'a',
                    label: 'A',
                    // headerComponentType: HeaderComponent,
                    // cellComponentType: CellAComponent,
                    width: '300px',
                    theme: {

                        // textAlign: 'center'
                        // padding: '5px'

                    }

                }, {

                    name: 'b',
                    label: 'B asdasdfasdfasf',
                    // headerComponentType: HeaderComponent,
                    width: '300px',
                    theme: {

                        // textAlign: 'center'
                        // padding: '5px'

                    }

                }, {

                    name: 'b',
                    label: 'B asdasdfasdfasf',
                    // headerComponentType: HeaderComponent,
                    width: '300px',
                    theme: {

                        // textAlign: 'center'
                        // padding: '5px'

                    }

                }, {

                    name: 'c',
                    label: 'Actions',

                    actions: [

                        {

                            name: 'DELETE',
                            iconClass: 'fa-duotone fa-trash-xmark',
                            color: 'red'

                        }, {

                            name: 'EDIT',
                            iconClass: 'fa-duotone fa-pen-to-square'

                        }

                    ],
                    width: '100px',
                    theme: {

                        // textAlign: 'center'
                        // padding: '5px'

                    }

                }

            ],
            theme: {

                container: {

                    border: '1px solid red'

                },
                header: {

                    backgroundColor: '#eee',
                    borderBottomColor: '#666'

                },
                row: {

                    height: '30px',
                    cursor: 'pointer',
                    borderBottomColor: '#666',
                    hover: {

                        backgroundColor: 'red'

                    }

                },
                cell: {

                    // padding: '10px'

                }

            },
            data$

        });

        table.click$.subscribe(cell => {

            console.log(cell);

        });

    }

}
