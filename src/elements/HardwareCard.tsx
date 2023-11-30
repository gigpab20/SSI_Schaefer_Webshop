import React from 'react';

import '../stylesheets/HardwareCard.css';
import {HardwareInt} from "../interface/HardwareInt";

interface HardwareProps {
    item:HardwareInt;
    onBuy: (product:HardwareInt) => void
}

const HardwareCard: React.FC<{ hardwareItem: HardwareProps }> = ({ hardwareItem }) => (


    <div className="hardwareCard">

        <img src={hardwareItem.item.pictureLink} alt={hardwareItem.item.name} />

        <p>{`Name: ${hardwareItem.item.name}`}</p>

        <p>{`ID: ${hardwareItem.item.productNum}`}</p>

        <p>{`Preis: ${hardwareItem.item.price}€`}</p>

        <button onClick={() => hardwareItem.onBuy(hardwareItem.item)}>Buy</button>


    </div>


);


export default HardwareCard;