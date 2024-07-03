import React from 'react';
import { HardwareInt } from "../interface/HardwareInt";
import HardwareCard from "./HardwareCard";

interface GridProps {
    hardware: HardwareInt[];
    onBuy: (product: HardwareInt) => void;
}

const Grid: React.FC<{ gridProps: GridProps }> = ({ gridProps }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {gridProps.hardware.map((item: HardwareInt) => (
                <HardwareCard key={item.ANLAGENNR} hardwareItem={{ item, onBuy: gridProps.onBuy }} />
            ))}
        </div>
    );
};

export default Grid;
