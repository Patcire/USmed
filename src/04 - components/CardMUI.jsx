import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button, CardActions} from "@mui/material";

const CardMUI = (drug) => {
    console.log('drug', drug.info)
    return (
        <Card sx={{ maxWidth: 300, minHeight:220, maxHeight:220, padding: 2}}>
            <CardContent sx={{minHeight: 160, maxHeight: 160}}>
                {
                    drug.info.openfda.brand_name ?
                        <p><strong>Brand name</strong>: {drug.info.openfda.brand_name}</p>
                            :
                        <p ><strong>Brand name</strong>: <em className={'card__unknown'} >Unknown</em></p>
                }
                {
                    drug.info.openfda.generic_name ?
                        <p><strong>Generic name</strong>: {drug.info.openfda.generic_name}</p>
                            :
                        <p><strong>Generic name</strong>: <em className={'card__unknown'} >Unknown</em></p>
                }
                {
                    drug.info.purpose ?
                        <p className={'card__purpose'} ><strong>Purpose</strong>: {drug.info.purpose}</p>
                            :
                        <p><strong>Purpose</strong>: <em className={'card__unknown'} >Unknown</em></p>
                }
            </CardContent>
            <CardActions>
            <Button size="small" sx={{color: '#f17b19', '&:hover':{backgroundColor: 'rgba(112,111,111,0.06)'}}}>More info</Button>
        </CardActions>
    </Card>)
}

export default CardMUI