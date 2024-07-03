import Header from "./elements/Header";
import { ProductService } from './Service/ProductService'; // Korrektur hier
import { Router } from "express";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';
import TestAdminPanel from "./test/TestAdminPanel";

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
