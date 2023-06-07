import { ShopLayout } from '@/components/layout';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid',
        headerName: 'Estado del pago',
        description: 'muestra si la orden esta pagada o no',
        renderCell: (params: GridRenderCellParams) => {
            return params.row.paid ? (
                <Chip color='success' label='Pagado' variant='outlined' />
            ) : (
                <Chip color='error' label='No pagada' variant='outlined' />
            );
        },
        width: 200,
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link color='#000' component={'span'}>
                        Ver Orden
                    </Link>
                </NextLink>
            );
        },
        width: 200,
        sortable: false,
    },
];
const rows = [
    { id: 1, paid: true, fullname: 'Santiago Paredes' },
    { id: 2, paid: false, fullname: 'juan acero' },
    { id: 3, paid: true, fullname: 'pedro pablo' },
    { id: 4, paid: false, fullname: 'lius silva' },
    { id: 5, paid: true, fullname: 'omar paz' },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title={'Historial de compras'}
            pageDescription={'HIstorial de Ordenes del cliente'}
        >
            {' '}
            <Typography variant='h1' component={'h1'}>
                {' '}
                Historial de Ordenes{' '}
            </Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10, 25]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
