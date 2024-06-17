import { createBrowserRouter } from "react-router-dom";
import Gallery from "../03 - pages/Gallery.jsx";
import Product from "../03 - pages/Product.jsx";
import RootLayout from "../02 - Layout/RootLayout.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index:true,
                path: "/",
                element: <Gallery/>,
            },
            {
                path: "/product",
                element: <Product/>,
            }
        ]
    },

])