import React, {ChangeEvent, useEffect , useState} from 'react';
import "../src/stylesheets/mainPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HardwareInt} from "./interface/HardwareInt";
import Header from "./elements/Header";
import Grid from "./elements/Grid";
import { ProductSevice } from './Service/ProductSevice';
import {Router} from "express";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestBackend from "./testForPandy (dont touch)/TestBackend";
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';

function App() {

    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path={"/mainpage"} element={<Mainpage/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path={"/test"} element={<TestBackend/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;