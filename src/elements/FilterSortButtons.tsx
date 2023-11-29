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

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterAnchorElement(event.currentTarget);
    };

    const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSortAnchorElement(event.currentTarget);
    };

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
                <MenuItem onClick={handleClose}>Filter Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Filter Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Filter Option 3</MenuItem>
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
                <MenuItem onClick={handleClose}>Sort Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Sort Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Sort Option 3</MenuItem>
            </Menu>
        </div>
    );
};

export default FilterSortButtons;