import React from 'react';
import '../stylesheets/contentPage.css';
import HeaderNoSort from './HeaderNoSort';

const Impressum: React.FC = () => {
    return (
        <>
            <HeaderNoSort />
            <div className="content-container">
                <h1>Impressum</h1>
                <p>Dies ist der Dummy-Text für das Impressum. Hier können Sie Ihre Impressumsinformationen einfügen.</p>
            </div>
        </>
    );
};

export default Impressum;
