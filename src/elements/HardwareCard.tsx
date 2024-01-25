import React from 'react';
import '../stylesheets/hardwareCard.css';
import {HardwareInt} from "../interface/HardwareInt";

interface HardwareProps {
    item: HardwareInt; // Deine Hardware Interface
    onBuy: (product: HardwareInt) => void; // Kauffunktion
}

const HardwareCard: React.FC<HardwareProps> = ({ item, onBuy }) => (
    <div className="hardwareCard">
        <div className="hardwareDetails">
            <p>{`ID: ${item.ARTIKEL}`}</p>
            <p>{`BEZEICH: ${item.BEZEICH}`}</p>
            <p>{`SERIENNR: ${item.SERIENNR}`}</p>
            <p>{`SERIENNR: ${item.SERIENNR}`}</p>
            <p>{`SERIENNR: ${item.SERIENNR}`}</p>
        </div>
        <button className="buyButton" onClick={() => onBuy(item)}>Kaufen</button>
    </div>
);

export default HardwareCard;
