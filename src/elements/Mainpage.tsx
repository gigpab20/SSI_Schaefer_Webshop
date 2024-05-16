import React, {ChangeEvent, useEffect , useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductSevice } from '../Service/ProductSevice';
import { HardwareInt } from '../interface/HardwareInt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Grid from './Grid';


const Mainpage = () => {

    const [hardware, setHardware] = useState<HardwareInt[]>([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRangeValue, setPriceRangeValue] = useState(0);

    useEffect(() => {
        ProductSevice.getProducts().then(setHardware);
    }, []);

    /*useEffect(() => {
        // Verschieben Sie die Logik von sortItems in diesen useEffect
        console.log(sortOption);
        switch (sortOption) {
            case "priceHighToLow":
                setHardware(prevHardware => [...prevHardware].sort((a, b) => parseFloat(b.PREIS) - parseFloat(a.PREIS)));
                break;
            case "priceLowToHigh":
                setHardware(prevHardware => [...prevHardware].sort((a, b) => parseFloat(a.PREIS) - parseFloat(b.PREIS)));
                break;
            case "nameAtoZ":
                setHardware(prevHardware => [...prevHardware].sort((a, b) => a.BEZEICH.localeCompare(b.BEZEICH)));
                break;
            case "nameZtoA":
                setHardware(prevHardware => [...prevHardware].sort((a, b) => b.BEZEICH.localeCompare(a.BEZEICH)));
                break;
            default:
                break;
        }
    }, [sortOption]);*/ // Der useEffect hängt von sortOption ab

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(!(parseInt(event.target.value).toString() === "NaN")) {
            setPriceRangeValue(parseInt(event.target.value));
        }
    };

    const onFilterPrice = () => {
        ProductSevice.getProductsByPrice(priceRangeValue).then(p => {
            setHardware(p);
        });
    };

    const handleBuy = (product: HardwareInt) => {
        const updatedHardware = hardware.filter(item => item.ANLAGENNR !== product.ANLAGENNR);
        setHardware(updatedHardware);
        toast.success(`Produkt ${product.BEZEICH} reserviert.`);
    };

    return (
        <div>
            <Header headerProps={{
                handleSortChange: (e) => setSortOption(e.target.value),
                handleRangeChange: (e) => setPriceRangeValue(parseInt(e.target.value)),
                onFilterPrice: () => ProductSevice.getProductsByPrice(priceRangeValue).then(setHardware)
            }} />
            <Grid gridProps={{ hardware, onBuy: handleBuy }} />
        </div>
    );
};

export default Mainpage;