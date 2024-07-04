/*                          ain't pushable....

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';
import TestAdminPanel from './test/TestAdminPanel';
import ProtectedRoute from './elements/ProtectedRoute';

const App: React.FC = () => {
    return (
        <Router>
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
            </Routes>
        </Router>
    );
};

export default App;
*/

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
