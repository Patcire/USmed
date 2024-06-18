import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button, CardActions} from "@mui/material";
import {orange} from "@mui/material/colors";

const CardMUI = (drug) => {
    console.log('drug', drug.info)
    return (
        <Card sx={{ maxWidth: 300, minHeight:300, maxHeight:300, padding: 2}}>
            <CardContent>
                {drug.info && <p><strong>Brand name</strong>: {drug.info.openfda.brand_name}</p>}
                {drug.info && <p><strong>Genereic name</strong>: {drug.info.openfda.generic_name}</p>}
                {drug.info && <p><strong>Purpose</strong>: {drug.info.purpose}</p>}
            </CardContent>
        <CardActions>
            <Button size="small" sx={{color: orange}}>More info</Button>
        </CardActions>
    </Card>)
}

export default CardMUI