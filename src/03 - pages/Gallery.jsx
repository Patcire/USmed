import {useDrugsStore} from "../05 -  helpers/store.js";
import CardMUI from "../04 - components/CardMUI.jsx";
import {Box, CircularProgress, Container, Grid, Pagination} from "@mui/material";
import theme from "../00 - styles/muiBreakpoints/breakpoints.js";


const Gallery = () => {

    const { drugs } = useDrugsStore((state) => ({
        drugs: state.drugs,
    }));

    return(
        drugs && drugs.length ?
        (<Container>
            <Grid justifyContent={'center'} alignItems={'center'}
                container spacing={2} sx={{paddingTop: 4, paddingBottom: 5}}>
            {
                drugs && drugs.length && drugs.map((drug) => {
                    return <Grid key={drug.id} item xs={12} sm={6}>
                                <CardMUI info={drug}></CardMUI>
                            </Grid>

                } )
            }
            </Grid>
            <Pagination
                sx={{
                    paddingLeft: 14,
                    paddingBottom: 12,
                    [theme.breakpoints.down('sm')]: {
                        size: 'small',
                        paddingLeft: 2.5
                    },
                }}
                count={5} variant="outlined"
                shape="rounded"
            />
        </Container>)
            :
        <Box display={'flex'} justifyContent={'center'} paddingTop={10}>
            <CircularProgress sx={{color: '#f17b19'}} />
        </Box>

    )



}

export default Gallery