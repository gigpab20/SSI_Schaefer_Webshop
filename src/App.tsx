import Header from "./elements/Header";
import Grid from "./elements/Grid";
import { ProductService } from './Service/ProductService'; // Korrektur hier
import { Router } from "express";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestBackend from "./testForPandy (dont touch)/TestBackend";
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';
import TestAdminPanel from "./testForPandy (dont touch)/TestAdminPanel";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/mainpage"} element={<Mainpage />} />
                    <Route path="/" element={<Login />} />
                    <Route path={"/adminPanel"} element={<TestAdminPanel />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
