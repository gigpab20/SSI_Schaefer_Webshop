import React, {ChangeEvent} from 'react';
import "../stylesheets/header.css"

interface HeaderProps {
    handleSortChange: (event:ChangeEvent<HTMLSelectElement>) => void;
    handleFilterChange: (event:ChangeEvent<HTMLFormElement>) => void;
}

const Header: React.FC<{headerProps: HeaderProps}> = ({headerProps}) => {
    return (
        <div>
            <header className="flex justify-between items-center custom-header-bg p-4">
                <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="logo"/>
                <div className="flex space-x-4">
                    <select className="form-select" onChange={headerProps.handleSortChange} >
                        <option value="priceHighToLow">Price high-to-low</option>
                        <option value="priceLowToHigh">Price low-to-high</option>
                        <option value="nameAtoZ">Name A-Z</option>
                        <option value="nameZtoA">Name Z-A</option>
                    </select>
                    <form onSubmit={headerProps.handleFilterChange} className="flex space-x-2">
                        <select className="form-select" id="form-select">
                            <option>Price</option>
                            <option>Name</option>
                        </select>
                        <input className="form-input" type="text" placeholder="Search" id="search"/>
                        <input type="submit" value="filter" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"/>
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Header;