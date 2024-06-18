import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button, CardActions} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDrugsStore} from "../05 -  helpers/store.js";

const CardMUI = (drug) => {


    const navigate = useNavigate()
    const { selectedDrug, cleansSelectedDrug } = useDrugsStore((state) => ({
        selectedDrug: state.selectedDrug,
        cleansSelectedDrug: state.cleansSelectedDrug,
    }));

    const goToDrugFullInfo = () => {
        navigate('/product')
    }

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
            <Button
                onClick={goToDrugFullInfo}
                size="small"
                sx={{color: '#f17b19', '&:hover':{backgroundColor: 'rgba(112,111,111,0.06)'}}}
            >More info</Button>
        </CardActions>
    </Card>)
}

export default CardMUI