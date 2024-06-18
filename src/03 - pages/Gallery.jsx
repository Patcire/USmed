import {useDrugsStore} from "../05 -  helpers/store.js";

const Gallery = () => {


    const { drugs, cleanDrugs } = useDrugsStore((state) => ({
        drugs: state.drugs,
        cleanDrugs: state.cleanDrugs,
    }));

    console.log(drugs)
    return(
        <ul>
            {
                drugs && drugs.length && drugs.map((drug) => {
                    return <li key={drug.id}>{drug.id}</li>
                } )
            }
        </ul>
    )

}

export default Gallery