import { Layout } from '@/components/layouts';
import { EntrieList, NewEntries } from '@/components/ui';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

export default function HomePage() {
    return (
        
            <Layout title="Home - OpenJira">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title="Pendientes" />
                            <CardContent>


                                <NewEntries/>
                                <EntrieList status='pending'/>
                            </CardContent>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title="En Proceso" />
                            <CardContent>
                                <EntrieList status='in-progres'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardHeader title="Completados" />
                            <CardContent>
                                <EntrieList status='finished'/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Layout>
       
    );
}
