import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="custom-footer-bg">
            <div className="footer-links">
                <Link to="/impressum" className="footer-link" target="_blank">Impressum</Link>
                <Link to="/agb" className="footer-link" target="_blank">AGB</Link>
                <Link to="/rueckgabe" className="footer-link" target="_blank">Rückgabe</Link>
            </div>
        </footer>
    );
};

export default Footer;
