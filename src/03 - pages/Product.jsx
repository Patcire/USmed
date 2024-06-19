import {useDrugsStore} from "../05 -  helpers/store.js";
import {Button, Container} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";

const Product = () => {

    const navigate = useNavigate()
    const { selectedDrug } = useDrugsStore((state) => ({
        selectedDrug: state.selectedDrug,
    }));

    const goBack = () =>{
        navigate('/')
    }

   return(
       <Container maxWidth="sm" sx={{paddingBottom: 12}}>
           <header className={'product__header'}>
               <Button onClick={goBack}
                       size= 'small'
                       sx={{
                           borderColor: '#f17b19',
                           width: 0,
                           '&:hover': {
                               backgroundColor: 'rgba(112,111,111,0.06)',
                               borderColor: '#f17b19',
                           }
                       }}
                       startIcon={<ArrowBackIcon  sx={{color: '#f17b19'}} />}
               />

               {
                   selectedDrug.openfda.brand_name ?
                       <h1><strong>Brand name</strong>: {selectedDrug.openfda.brand_name}</h1>
                       :
                       <h1><strong>Generic name</strong>: {selectedDrug.openfda.generic_name}</h1>
               }
           </header>

           {
               Object.keys(selectedDrug).map(property => (
                   <article key={property} className={'product__info'}>
                       <h3>{property}</h3>
                       <p className={'product__paragraph'}>{JSON.stringify(selectedDrug[property][0])}</p>
                       <hr className={'product__separator'}></hr>
                   </article>
               ))
           }

       </Container>
   )

}

export default Product