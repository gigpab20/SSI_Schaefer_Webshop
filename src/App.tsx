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

    const sortItems = () => {
        console.log(hardware);
        switch (sortOption) {
            case "priceHighToLow":
                setHardware([...hardware].sort((a, b) => b.PREIS.localeCompare(a.PREIS)));
                break;
            case "priceLowToHigh":
                setHardware([...hardware].sort((a, b) => a.PREIS.localeCompare(b.PREIS)));
                break;
            case "nameAtoZ":
                setHardware([...hardware].sort((a, b) => a.BEZEICH.localeCompare(b.BEZEICH)));
                break;
            case "nameZtoA":
                setHardware([...hardware].sort((a, b) => b.BEZEICH.localeCompare(a.BEZEICH)));
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

    /*const handleFilterChange = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
        //setFilteredHardware(hardware.filter())
        console.log("sumbitted");
    }*/

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPriceRangeValue(parseInt(event.target.value));
    }

    const onFilterPrice = () => {

        console.log("::::::::::::::: in App.tsx :::::::::::::::");
        console.log(priceRangeValue);

        ProductSevice.getProductsByPrice(priceRangeValue).then(p => {
            setHardware(p);
            console.log(p);
        })
    };

    useEffect(() => {
        ProductSevice.getProducts().then(
            products => {
                setHardware(products);
                console.log(products);
            }
        );
    }, []);

  const onBuy = (product:HardwareInt) => {
      const updatedHardware = hardware.filter(item => item !== product);
      setHardware(updatedHardware);
      toast.success(`You've successfully bought: ${product.BEZEICH}`);
      console.log(hardware);
  }
  
   return (
       <div>
           <Header headerProps={{handleSortChange, handleRangeChange, onFilterPrice}}></Header>
           <Grid gridProps={{hardware, onBuy}}></Grid>
           <br/><br/><br/><br/><br/><br/>
           <BrowserRouter>
               <Routes>
                   <Route path={"/test"} element={<TestBackend/>}></Route>
               </Routes>
           </BrowserRouter>
       </div>
   );
}

export default App;