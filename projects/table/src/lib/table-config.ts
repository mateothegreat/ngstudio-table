import { ReplaySubject } from 'rxjs';
import { TableCell } from './table-cell';
import { TableRow } from './table-row';

export class TableConfig {

    public header: Array<TableCell>;
    public data$: ReplaySubject<Array<TableRow>> = new ReplaySubject();

    public theme?: {

        container?: {

            width?: string,
            border?: string
            backgroundColor?: string,

        },
        header?: {

            backgroundColor?: string,
            borderBottomColor?: string

        },
        row?: {

            height?: string,
            cursor?: string,
            borderBottomColor?: string,
            hover?: {

                backgroundColor?: string

            }

        },
        cell?: {

            padding?: string

        }

    };

}
