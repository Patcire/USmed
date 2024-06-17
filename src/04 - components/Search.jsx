import {IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {callAPI} from "../05 -  helpers/API.js";

export const Search = () => {
    const handleSearch = async () => {
        const drugs = callAPI('')
        console.log(await drugs)
    }
    return (
        <>
        <TextField
            className={'header__search'}
            onChange={handleSearch}
            fullWidth
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
