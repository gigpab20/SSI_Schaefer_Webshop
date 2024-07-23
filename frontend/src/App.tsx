import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './elements/Login';
import Mainpage from './elements/Mainpage';
import TestAdminPanel from './test/TestAdminPanel';
import ProtectedRoute from './elements/ProtectedRoute';
import Impressum from './elements/Impressum';
import AGB from './elements/AGB';
import Rueckgabe from './elements/Rueckgabe';

const App: React.FC = () => {
    return (
        <HashRouter basename="/">
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
        </HashRouter>
    );
};

export default App;
