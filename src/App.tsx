import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';
import TestAdminPanel from './test/TestAdminPanel';
import ProtectedRoute from './elements/ProtectedRoute';
import Impressum from './elements/Impressum';
import AGB from './elements/AGB';
import Rueckgabe from './elements/Rueckgabe';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/mainpage"
                        element={
                            <ProtectedRoute>
                                <Mainpage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/adminPanel"
                        element={
                            <ProtectedRoute>
                                <TestAdminPanel />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/agb" element={<AGB />} />
                    <Route path="/rueckgabe" element={<Rueckgabe />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

//                          ain't pushable....
/*

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


 */