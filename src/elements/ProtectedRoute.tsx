import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Importiere jwtDecode aus jwt-decode

interface ProtectedRouteProps {
    children: React.ReactNode;
}

interface DecodedToken {
    exp: number;
    iat: number;
    [key: string]: any; // Erlaube zusätzliche Schlüssel, die vorhanden sein könnten
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('authToken');

    let isAuthenticated = false;
    if (token) {
        try {
            const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token); // Verwende jwtDecode statt jwt_decode
            isAuthenticated = !!decodedToken;
        } catch (error) {
            console.error("Token decoding failed:", error);
        }
    }

    console.log("Is Authenticated:", isAuthenticated);

    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
