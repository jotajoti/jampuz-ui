import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "urql";

import {router} from "./router.tsx";
import {client} from "./gql";

import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider value={client}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)
