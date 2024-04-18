import React, {ChangeEvent, useState} from 'react';
import "../stylesheets/header.css"

interface HeaderProps {
    handleSortChange: (event:ChangeEvent<HTMLSelectElement>) => void;
    handleRangeChange: (event:ChangeEvent<HTMLInputElement>) => void;
    onFilterPrice: () => void;
}

const Header: React.FC<{headerProps: HeaderProps}> = ({headerProps}) => {

    return (
        <div>
            <header className="flex justify-between items-center custom-header-bg p-4">
                <a href="https://www.ssi-schaefer.com/de-at" target="_blank" rel="noopener noreferrer">
                    <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="SSI Schäfer Logo"/>
                </a>
                <div className="flex space-x-4">
                    <select className="form-select" onChange={headerProps.handleSortChange}>
                        <option value="priceHighToLow">Price high-to-low</option>
                        <option value="priceLowToHigh">Price low-to-high</option>
                        <option value="nameAtoZ">Name A-Z</option>
                        <option value="nameZtoA">Name Z-A</option>
                    </select>

                    <input type="number" placeholder="Price" id="filterPrice" min={0} max={150}
                           onChange={headerProps.handleRangeChange}/>
                    <input type="button" value="filter"
                           className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                           onClick={headerProps.onFilterPrice}/>

                </div>
            </header>
        </div>
    );
};

export default Header;