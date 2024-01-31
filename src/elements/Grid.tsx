import React, {useState} from 'react';
import {HardwareInt} from "../interface/HardwareInt";
import HardwareCard from "./HardwareCard";

interface GridProps {
    hardware:HardwareInt[];
    onBuy: (product:HardwareInt) => void;
}

const Grid:React.FC<{gridProps: GridProps}> = ({gridProps}) => {

    const onBuy = ()=> {
        console.log("hi");
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {gridProps.hardware.map((item:HardwareInt) => (
                <HardwareCard hardwareItem={{item, onBuy}}></HardwareCard>
            ))}
        </div>
    );
};

export default Grid;