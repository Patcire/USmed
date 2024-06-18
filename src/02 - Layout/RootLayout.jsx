import {Outlet} from "react-router-dom";
import {CustomHeader} from "../04 - components/CustomHeader.jsx";
import {Container} from "@mui/material";

const RootLayout = () => {

    return(
    <>
        <CustomHeader></CustomHeader>
        <main>
            <Container maxWidth="md">
                <Outlet></Outlet>
            </Container>
        </main>
    </>
)
}

export default RootLayout