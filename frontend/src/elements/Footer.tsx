import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/stylesheets/footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="custom-footer-bg">
            <div className="footer-links">
                <Link to="/impressum" className="footer-link" >Impressum</Link>
                <Link to="/agb" className="footer-link" >AGB</Link>
                <Link to="/rueckgabe" className="footer-link">Rückgabe</Link>
            </div>
            <div className="footer-motto">Think Tomorrow</div>
        </footer>
    );
};

export default Footer;
