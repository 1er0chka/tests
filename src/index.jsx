import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.sass'
import Router from "./service/Router";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
            <Router/>
    </React.StrictMode>
);
