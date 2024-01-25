import React, { useEffect, useState } from 'react';
import "../src/stylesheets/mainPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import logo from "./assets/schäfer-logo-removebg.png";
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterSortButtons from "./elements/FilterSortButtons";
import { HardwareInt } from "./interface/HardwareInt";
import HardwareCard from "./elements/HardwareCard";
import data from './data/data_with_array_wrapper.json'; // Importiere die Daten

function App() {
    const [hardware, setHardware] = useState<HardwareInt[]>(data); // Verwende die importierten Daten

    const onBuy = (product: HardwareInt) => {
        const updatedHardware = hardware.filter(item => item.ARTIKEL !== product.ARTIKEL);
        setHardware(updatedHardware);
        toast.success(`You've successfully bought: ${product.ARTIKEL}`);
        console.log(hardware);
    }

    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <div className={"upperYellowBar"}/>
            <img src={logo} className={"logoImage"} />
            <div className={"yellowFilterAndSearchBar"}>
                <TextField
                    style={{width: "16vw", height: "8vh", marginLeft: "1.5vw", marginTop: "2vh"}}
                    className={"customSearchTextField"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        )
                    }}>
                </TextField>
                <FilterSortButtons/>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignSelf: "center", marginTop: '250px', position: "absolute", marginLeft: "100px", marginRight: "100px" }}>
                <ToastContainer />
                {hardware.map((item, index) => (
                    <div key={index}>
                        <HardwareCard item={item} onBuy={onBuy} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
