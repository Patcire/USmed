import {Outlet} from "react-router-dom";
import {CustomHeader} from "../04 - components/CustomHeader.jsx";
import {Container} from "@mui/material";

const RootLayout = () => {

    return(
    <>
        <CustomHeader></CustomHeader>
        <main>
            <Container maxWidth="sm" sx={{marginTop: 2}}>
                <Outlet></Outlet>
            </Container>
        </main>
    </>
)
}

export default RootLayout