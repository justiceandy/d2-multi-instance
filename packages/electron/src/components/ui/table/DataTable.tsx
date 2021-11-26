import './DataTable.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
//, GridValueGetterParams
const defaultColumns: GridColDef[] = [
    { 
        field: 'id', 
        type: 'number',
        headerName: 'ID', 
        width: 60,
        headerClassName: 'ui-grid-centered'
    },
    {
      field: 'type',
      headerName: 'Type',
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
      field: 'account',
      headerName: 'Account',
    },
    {
      field: 'cpu',
      headerName: 'CPU',
      type: 'number',
      headerClassName: 'ui-grid-centered'
    },
    {
      field: 'memory',
      type: 'number',
      headerName: 'Memory',
      headerClassName: 'ui-grid-centered',
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    },
  ];
  
  const defaultRows = [
    { id: 1, type: 'internal', name: 'Registry Scanner', account: '', cpu: '20', memory: '1200' },
    { id: 2, type: 'internal', name: 'Process Watcher', account: '', cpu: '20', memory: '1200' },
    { id: 3, type: 'd2r', name: 'D2R.exe', account: 'example1', cpu: '20', memory: '1200' },
    { id: 4, type: 'd2r', name: 'D2R.exe', account: 'example2', cpu: '20', memory: '1200' },
    { id: 5, type: 'd2r', name: 'D2R.exe', account: 'example3', cpu: '20', memory: '1200' },
    { id: 6, type: 'd2r', name: 'D2R.exe', account: 'example4', cpu: '20', memory: '1200' },
    { id: 7, type: 'd2r', name: 'D2R.exe', account: 'example4', cpu: '20', memory: '1200' },
  ];
  
export default function DataTable ({ rows = defaultRows, columns = defaultColumns }:any) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                getRowClassName={() => 'ui-grid-row'}
                getCellClassName={() => 'ui-grid-item'}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
  };