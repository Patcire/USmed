import {Outlet} from "react-router-dom";
import {CustomHeader} from "../04 - components/CustomHeader.jsx";

const RootLayout = () => {

    return(
    <>
        <CustomHeader></CustomHeader>
        <main>
            <Outlet></Outlet>
        </main>
    </>
)
}

export default RootLayout