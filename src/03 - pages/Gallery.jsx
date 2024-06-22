import {useDrugsStore} from "../05 -  helpers/store.js";
import CardMUI from "../04 - components/CardMUI.jsx";
import {Box, CircularProgress, Container, Grid, Pagination} from "@mui/material";
import theme from "../00 - styles/muiBreakpoints/breakpoints.js";
import {callAPI} from "../05 -  helpers/API.js";
import {useState} from "react";


const Gallery = () => {

    //variables-const
    const [page, setPage] = useState(1)
    const { drugs , updateDrugs, lastKeyWord, totalPagesOfSearch} = useDrugsStore((state) => ({
        drugs: state.drugs,
        updateDrugs: state.updateDrugs,
        lastKeyWord: state.lastKeyWord,
        totalPagesOfSearch: state.totalPagesOfSearch
    }));

    // methods

    const handlePagination = async (event, value) => {
        setPage(value)
        let searchedDrugs = await callAPI( 20*value-1 , lastKeyWord)
        await updateDrugs(searchedDrugs.results)
    }

    // render
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
                onChange={handlePagination}
                sx={{
                    paddingLeft: 14,
                    paddingBottom: 12,
                    [theme.breakpoints.down('sm')]: {
                        size: 'small',
                        paddingLeft: 2.5
                    },
                }}
                count={totalPagesOfSearch}
                variant="outlined"
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