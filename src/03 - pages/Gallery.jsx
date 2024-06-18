import {useDrugsStore} from "../05 -  helpers/store.js";
import CardMUI from "../04 - components/CardMUI.jsx";
import {Grid} from "@mui/material";

const Gallery = () => {


    const { drugs, cleanDrugs } = useDrugsStore((state) => ({
        drugs: state.drugs,
        cleanDrugs: state.cleanDrugs,
    }));

    console.log(drugs)
    return(


        <Grid container spacing={2} sx={{paddingTop: 4, paddingBottom: 12}}>
        {
            drugs && drugs.length && drugs.map((drug) => {
                return <Grid key={drug.id} item xs={12} sm={6}>
                            <CardMUI info={drug}></CardMUI>
                        </Grid>

            } )
        }
        </Grid>


    )



}

export default Gallery