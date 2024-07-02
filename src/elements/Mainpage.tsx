import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HardwareInt } from '../interface/HardwareInt';
import Header from './Header';
import Grid from './Grid';
import { MockData } from '../mockdata/MockData'; // Stellen Sie sicher, dass dieser Import korrekt ist

const Mainpage = () => {
    const [hardware, setHardware] = useState<HardwareInt[]>([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRangeValue, setPriceRangeValue] = useState(0);

    useEffect(() => {
        const data = MockData.getMockHardwareData();
        setHardware(data);
    }, []);

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
        sortItems(event.target.value);
    };

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!(parseInt(event.target.value).toString() === "NaN")) {
            setPriceRangeValue(parseInt(event.target.value));
        }
    };

    const onFilterPrice = () => {
        const filtered = MockData.getMockHardwareData().filter(item => parseFloat(item.PREIS || "0") < priceRangeValue);
        setHardware(filtered);
    };

    const sortItems = (option: string) => {
        let sortedHardware = [...hardware];
        switch (option) {
            case "priceHighToLow":
                sortedHardware.sort((a, b) => parseFloat(b.PREIS || "0") - parseFloat(a.PREIS || "0"));
                break;
            case "priceLowToHigh":
                sortedHardware.sort((a, b) => parseFloat(a.PREIS || "0") - parseFloat(b.PREIS || "0"));
                break;
            case "nameAtoZ":
                sortedHardware.sort((a, b) => a.BEZEICH.localeCompare(b.BEZEICH));
                break;
            case "nameZtoA":
                sortedHardware.sort((a, b) => b.BEZEICH.localeCompare(a.BEZEICH));
                break;
            default:
                break;
        }
        setHardware(sortedHardware);
    };

    const handleBuy = (product: HardwareInt) => {
        const updatedHardware = hardware.filter(item => item.ANLAGENNR !== product.ANLAGENNR);
        setHardware(updatedHardware);
        toast.success(`Produkt ${product.ANLAGENNR} reserviert.`);
    };

    return (
        <div>
            <Header headerProps={{
                handleSortChange: handleSortChange,
                handleRangeChange: handleRangeChange,
                onFilterPrice: onFilterPrice
            }} />
            <Grid gridProps={{ hardware, onBuy: handleBuy }} />
        </div>
    );
};

export default Mainpage;
