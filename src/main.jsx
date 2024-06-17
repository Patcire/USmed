import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./01 - router/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <main className={'body'}>
            <RouterProvider router={router}/>
      </main>
      </React.StrictMode>
)
