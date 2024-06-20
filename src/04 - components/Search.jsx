import {IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {callAPI} from "../05 -  helpers/API.js";
import {useEffect, useState} from "react";
import {useDrugsStore} from "../05 -  helpers/store.js";

export const Search = () => {

    // variables-states
    const [keyword, setKeyword] = useState('')
    const { updateDrugs } = useDrugsStore((state) => ({
        updateDrugs: state.updateDrugs,
    }));


    // methods

    const handleInputChange = (e) => {
        setKeyword(e.target.value)
        console.log(keyword)
    }


    const handleSearch = async (keyword) => {
        const searchedDrugs = await callAPI(0, keyword)
        await updateDrugs(searchedDrugs.results)
    }

    // hooks

    useEffect (() => {
        handleSearch(keyword)
    }, [keyword]);


    // render

    return (
        <>
            <TextField
                sx={{
                    minWidth: 120,
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#f17b19'}}
                }}
                className={'header__search'}
                onChange={handleInputChange}
                placeholder="Search..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}
