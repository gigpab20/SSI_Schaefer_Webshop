import React, { ChangeEvent } from 'react';
import "../../src/stylesheets/header.css";

interface HeaderProps {
    handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleRangeChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFilterPrice: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSortChange, handleRangeChange, onFilterPrice }) => {
    return (
        <div>
            <header className="flex justify-between items-center custom-header-bg p-4">
                <a href="https://www.ssi-schaefer.com/de-at" target="_blank" rel="noopener noreferrer">
                    <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="SSI Schäfer Logo" />
                </a>
                <div className="flex space-x-4">
                    <div className="dropdown-container">
                        <select className="dropdown-select" onChange={handleSortChange}>
                            <option value="priceHighToLow">Price high-to-low</option>
                            <option value="priceLowToHigh">Price low-to-high</option>
                            <option value="nameAtoZ">Name A-Z</option>
                            <option value="nameZtoA">Name Z-A</option>
                        </select>
                        <span className="dropdown-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </div>
                    <input type="number" placeholder="Price" id="filterPrice" min={0} max={150}
                           onChange={handleRangeChange} />
                    <input type="button" value="Filter"
                           className="btn-filter"
                           onClick={onFilterPrice} />
                </div>
            </header>
        </div>
    );
};

export default Header;
