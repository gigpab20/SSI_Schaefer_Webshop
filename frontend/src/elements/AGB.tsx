import React from 'react';
import '../../src/stylesheets/contentPage.css';
import HeaderNoSort from './HeaderNoSort';

const AGB: React.FC = () => {
    return (
        <>
        <HeaderNoSort />
            <div className="content-container">
                 <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
                <p>Dies ist der Dummy-Text für die AGB. Hier können Sie Ihre allgemeinen Geschäftsbedingungen einfügen.</p>
             </div>
        </>
    );
};

export default AGB;
