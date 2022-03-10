import { Key, MouseEventHandler } from "react-router-dom/node_modules/@types/react";
import { GridColDef } from '@mui/x-data-grid';

export type Row = {
    id?: Key,
    type?: string,
    name?: string,
    account?: string,
    cpu?: string,
    memory?: string,
}
export type Column = GridColDef
export type Columns = GridColDef[]
export type Rows = row[]

export interface DataTableProps {
    rows: rows,
    columns: columns,
}
