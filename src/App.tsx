import React, {ChangeEvent, useEffect , useState} from 'react';
import "../src/stylesheets/mainPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {HardwareInt} from "./interface/HardwareInt";
import Header from "./elements/Header";
import Grid from "./elements/Grid";
import { ProductSevice } from './Service/ProductSevice';
import {Router} from "express";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestBackend from "./testForPandy (dont touch)/TestBackend";

function App() {
    const [hardware, setHardware] = useState<HardwareInt[]>([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRangeValue, setPriceRangeValue] = useState(0);

    useEffect(() => {
        ProductSevice.getProducts().then(products => {
            setHardware(products);
            console.log(products);
        });
    }, []);

    useEffect(() => {
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
    }, [sortOption]); // Der useEffect hängt von sortOption ab

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

    const onBuy = (product:HardwareInt) => {
        const updatedHardware = hardware.filter(item => item !== product);
        setHardware(updatedHardware);
        toast.success(`You've successfully bought: ${product.BEZEICH}`);
    };

    return (
        <div>
            <Header headerProps={{handleSortChange, handleRangeChange, onFilterPrice}}></Header>
            <Grid gridProps={{hardware, onBuy}}></Grid>
            <BrowserRouter>
                <Routes>
                    <Route path={"/test"} element={<TestBackend/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;