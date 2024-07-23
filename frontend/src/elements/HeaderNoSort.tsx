import React from 'react';
import "../../src/stylesheets/header.css";

const HeaderNoSort: React.FC = () => {
    return (
        <div>
            <header className="flex justify-between items-center custom-header-bg p-4">
                <a href="https://www.ssi-schaefer.com/de-at" target="_blank" rel="noopener noreferrer">
                    <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="SSI Schäfer Logo" />
                </a>
            </header>
        </div>
    );
};

export default HeaderNoSort;
