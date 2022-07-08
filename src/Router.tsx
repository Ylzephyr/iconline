import React from "react";
import { BrowserRouter, Outlet, Route, Routes, HashRouter } from "react-router-dom";
import IndexPage from "./pages/Index";


export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<IndexPage />} />
                    <Route path="about" element={<div>about</div>} />
                    <Route path="contact" element={<div>contact</div>} />
                </Route>

                <Route path="*" element={<div>404 no found</div>}></Route>

            </Routes>
        </HashRouter>
    )
}