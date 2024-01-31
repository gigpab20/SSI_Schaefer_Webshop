import React from 'react';
import "../stylesheets/header.css"

interface HeaderProps {
    handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Header: React.FC<{headerProps: HeaderProps}> = ({headerProps}) => {
    return (
        <div>
            <header className="flex justify-between items-center custom-header-bg p-4">
                <img className="h-10 w-auto" src="/assets/schäfer-logo-removebg.png" alt="logo"/>
                <div className="flex space-x-4">
                    <input className="form-input" type="text" placeholder="Search"/>
                    <select className="form-select" onChange={headerProps.handleSortChange}>
                        <option value="priceHighToLow">Price high-to-low</option>
                        <option value="priceLowToHigh">Price low-to-high</option>
                        <option value="nameAtoZ">Name A-Z</option>
                        <option value="nameZtoA">Name Z-A</option>
                    </select>
                    <select className="form-select">
                        <option>Price</option>
                        <option>Name</option>
                    </select>
                </div>
            </header>
        </div>
    );
};

export default Header;