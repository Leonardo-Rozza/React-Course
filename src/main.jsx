import React from "react";
import ReactDOM from 'react-dom/client';
import {App} from "./HelloWordApp.jsx";
import {FirstApp} from "./FirstApp.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {ExampleLoaderComponent} from "./dev/palette.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <App/>
            <FirstApp/>
    </React.StrictMode>
)