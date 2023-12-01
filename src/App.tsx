import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import logo from "./assets/schäfer-logo-removebg.png"
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterSortButtons from "./elements/FilterSortButtons";
import {HardwareInt} from "./interface/HardwareInt";
import {hardwareMock} from "./mockdata/hardwareMock";
import HardwareCard from "./elements/HardwareCard";

function App() {

  const [hardware, setHardware] = React.useState<HardwareInt[]>(hardwareMock)

  const onBuy = (product:HardwareInt) => {
      const updatedHardware = hardware.filter(item => item !== product);
      setHardware(updatedHardware);
      toast.success(`You've successfully bought: ${product.name}`);
      console.log(hardware);
  }

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: "100vw", height: 75, left: 0, top: 0, position: 'absolute', background: '#FFED00'}} />
      <img style={{width: "auto", height: 80, left: 190, top: -2, position: 'absolute'}} src={logo} />
      
      <div style={{width: "100vw", height: 75, left: 0, top: "18.75vh", position: 'absolute', background: "#FFED00"}}>
          <TextField  style={{width: "300px", height: "40px", marginLeft: "20px", marginTop: "18px"}} InputProps={{
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
                <div>
                    <HardwareCard key={index} hardwareItem={{item, onBuy}}  />
                </div>

            ))}
        </div>
    </div>
  );
}

export default App;
