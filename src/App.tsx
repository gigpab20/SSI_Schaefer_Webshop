import React, {ChangeEvent, useState} from 'react';
import "../src/stylesheets/mainPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {HardwareInt} from "./interface/HardwareInt";
import {hardwareMock} from "./mockdata/hardwareMock";
import Header from "./elements/Header";
import Grid from "./elements/Grid";

function App() {

    const [hardware, setHardware] = useState<HardwareInt[]>(hardwareMock)

    const [sortOption, setSortOption] = useState("");

    const [filteredHardware, setFilteredHardware] = useState<HardwareInt[]>([])

    const sortItems = () => {
        switch (sortOption) {
            case "priceHighToLow":
                setHardware([...hardware].sort((a, b) => b.price - a.price));
                break;
            case "priceLowToHigh":
                setHardware([...hardware].sort((a, b) => a.price - b.price));
                break;
            case "nameAtoZ":
                setHardware([...hardware].sort((a, b) => a.name.localeCompare(b.name)));
                break;
            case "nameZtoA":
                setHardware([...hardware].sort((a, b) => b.name.localeCompare(a.name)));
                break;
            default:
                break;
        }
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        console.log("changing")
        setSortOption(event.target.value);
        sortItems();
    };

    const handleFilterChange = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
        //setFilteredHardware(hardware.filter())
        console.log("sumbitted");
    }

    const onBuy = (product:HardwareInt) => {
        const updatedHardware = hardware.filter(item => item !== product);
        setHardware(updatedHardware);
        toast.success(`You've successfully bought: ${product.name}`);
        console.log(hardware);
    }

    return (
        <div>
            <Header headerProps={{handleSortChange, handleFilterChange}}></Header>
            <Grid gridProps={{hardware, onBuy}}></Grid>
        </div>
    );
}

export default App;