import {Outlet} from "react-router-dom";
import {CustomHeader} from "../04 - components/CustomHeader.jsx";

const RootLayout = () => {

    return(
    <>
        <CustomHeader></CustomHeader>
        <section>
            <Outlet></Outlet>
        </section>
    </>
)
}

export default RootLayout