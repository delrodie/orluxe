import React from 'react';
import {createRoot} from "react-dom";
import App from "./js/components/App";
import './styles/app.scss';
import './styles/responsives.scss'

const root =createRoot(document.getElementById('root'));

root.render(<App/>);