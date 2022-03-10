import { DataGrid } from '@mui/x-data-grid';
import { Container } from './DataTable.styled';
import { DataTableProps } from './DataTable.d'

export default function DataTable ({ rows = [], columns = [] }:DataTableProps) {
    return (
        <Container style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                getRowClassName={() => 'ui-grid-row'}
                getCellClassName={() => 'ui-grid-item'}
                rowsPerPageOptions={[5]}
            />
        </Container>
    );
  };
