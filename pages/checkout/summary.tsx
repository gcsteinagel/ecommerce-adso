import NextLink from 'next/link'
import { Typography, Grid, Card, CardContent, Divider, Button, Box, Link } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { OrderSummary } from "../../components/cart/OrderSummary"
import { CartList } from "../../components/cart/CartList"

const SummaryPage = () => {
    return (
        <ShopLayout title={'resúmen de orden'} pageDescription={'Resúmen de la orden'}>
            <Typography component='h1' variant='h1'>Resúmen de la orden</Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* CartList */}
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resúmen (3 productos)</Typography>
                            <Divider sx={{ my:2 }} />
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                                <NextLink href='/checkout/address' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <Typography>Andrés Reyes</Typography>
                            <Typography>Carrera 2</Typography>
                            <Typography>Los pinos</Typography>
                            <Typography>Colombia</Typography>
                            <Typography>+57 312 542 5425</Typography>
                            <Divider sx={{ my:1 }} />
                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />
                            <Button color='secondary' className='circular-btn' fullWidth>
                                Confirmar Orden
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage