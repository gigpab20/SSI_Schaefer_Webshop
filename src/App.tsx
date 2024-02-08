import React, {ChangeEvent, useEffect , useState} from 'react';
import "../src/stylesheets/mainPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {HardwareInt} from "./interface/HardwareInt";
import Header from "./elements/Header";
import Grid from "./elements/Grid";
import { ProductSevice } from './Service/ProductSevice';

function App() {
    const [hardware, setHardware] = useState<HardwareInt[]>([]);
 
    const [sortOption, setSortOption] = useState("");

    const [filteredHardware, setFilteredHardware] = useState<HardwareInt[]>([])

    const sortItems = () => {
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

    const handleFilterChange = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
        //setFilteredHardware(hardware.filter())
        console.log("sumbitted");
    }

    useEffect(() => {
        ProductSevice.getSong().then(
            products => {
                setHardware(products);
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
            <Header headerProps={{handleSortChange, handleFilterChange}}></Header>
            <Grid gridProps={{hardware, onBuy}}></Grid>
        </div>
   );
}

export default App;