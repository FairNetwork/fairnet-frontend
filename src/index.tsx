import React from 'react';
import ReactDOM from 'react-dom/client';
import "allotment/dist/style.css";
import App from "./components/App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
