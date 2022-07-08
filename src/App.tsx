import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import "@/css/global.css"
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <RecoilRoot>
        <AppRouter />
    </RecoilRoot>,
    document.getElementById("app"),
);