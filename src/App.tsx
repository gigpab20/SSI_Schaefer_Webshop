import React from 'react';
import './App.css';
import logo from "./assets/schäfer-logo-removebg.png"
import pcExample from "./assets/pcExample.jpg"
import switchExample from "./assets/switchExample.jpg"
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterSortButtons from "./elements/FilterSortButtons";

function App() {

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: "100vw", height: 50, left: 0, top: 0, position: 'absolute', background: '#FFED00'}} />
      <img style={{width: 125, height: 50, left: 130, top: 0, position: 'absolute'}} src={logo} />
      
      <div style={{width: "100vw", height: 50, left: 0, top: "18.75vh", position: 'absolute', background: "#FFED00", zIndex: 100}}>
     
          <TextField  style={{width: "200px", height: "40px", marginLeft: "20px", marginTop: "7px", marginRight: "620px"}} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            )
          }}>

          </TextField>

          <FilterSortButtons/>
      </div>
    </div>
  );
}

export default App;
