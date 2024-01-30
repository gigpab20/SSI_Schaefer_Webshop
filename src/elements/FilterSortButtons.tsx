import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import "../stylesheets/filterAndSortButtons.css"

const FilterSortButtons = () => {
    const [filterAnchorElement, setFilterAnchorElement] = React.useState<null | HTMLElement>(null);
    const [sortAnchorElement, setSortAnchorElement] = React.useState<null | HTMLElement>(null);

    const [sortType, setSortType] = React.useState<string>("A-Z")
    const [filterType, setFilterType] = React.useState<string>("")

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterAnchorElement(event.currentTarget);
    };

    const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSortAnchorElement(event.currentTarget);
    };

    const handleFilterOnClick = (type:string) => {
        setFilterType(type);
        console.log(filterType);
    }

    const handleSortOnClick = (type:string) => {
        setSortType(type);
        console.log(sortType);
    }

    const handleClose = () => {
        setFilterAnchorElement(null);
        setSortAnchorElement(null);
    };

    return (
        <div className="FilterSortButtons">
            <Button
                startIcon={<FilterListIcon />}
                aria-controls="filter-menu"
                aria-haspopup="true"
                onClick={handleFilterClick}
                color="inherit"
            >
                Filter
            </Button>
            <Menu
                id="filter-menu"
                anchorEl={filterAnchorElement}
                keepMounted
                open={Boolean(filterAnchorElement)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleFilterOnClick("desktopComputer")}>Desktop Computer</MenuItem>
                <MenuItem onClick={() => handleFilterOnClick("laptop")}>Laptop</MenuItem>
                <MenuItem onClick={() => handleFilterOnClick("netzwerkHardware")}>Netzwerk Hardware</MenuItem>
            </Menu>

            {/* Sort Button */}
            <Button
                startIcon={<SortIcon />}
                aria-controls="sort-menu"
                aria-haspopup="true"
                onClick={handleSortClick}
                color="inherit"
            >
                Sort
            </Button>
            <Menu
                id="sort-menu"
                anchorEl={sortAnchorElement}
                keepMounted
                open={Boolean(sortAnchorElement)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleSortOnClick("A-Z")}>A-Z</MenuItem>
                <MenuItem onClick={() => handleSortOnClick("Z-A")}>Z-A</MenuItem>
                <MenuItem onClick={() => handleSortOnClick("g-t")}>Preis (günstig-teuer)</MenuItem>
                <MenuItem onClick={() => handleSortOnClick("t-g")}>Preis (teuer-günstig)</MenuItem>
            </Menu>
        </div>
    );
};

export default FilterSortButtons;