import React from 'react';
import './App.css';
import logo from "./assets/schäfer-logo-removebg.png"
import pcExample from "./assets/pcExample.jpg"
import switchExample from "./assets/switchExample.jpg"
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterSortButtons from "./elements/FilterSortButtons";
import {HardwareInt} from "./interface/HardwareInt";
import {hardwareMock} from "./mockdata/hardwareMock";
import {log} from "util";

const HardwareCard: React.FC<{ hardwareItem: HardwareInt }> = ({ hardwareItem }) => (
    <div style={{ width: '20vw', margin: '10px', textAlign: 'center' }}>
        <img src={hardwareItem.pictureLink} alt={hardwareItem.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
        <p>{`Name: ${hardwareItem.name}`}</p>
        <p>{`ID: ${hardwareItem.productNum}`}</p>
    </div>
);

function App() {

  const [hardware, setHardware] = React.useState<HardwareInt[]>(hardwareMock)

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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignSelf: "center", marginTop: '230px', position: "absolute", marginLeft: "100px", marginRight: "100px" }}>
            {hardware.map((item, index) => (
                <HardwareCard key={index} hardwareItem={item} />
            ))}
        </div>
    </div>
  );
}

export default App;
