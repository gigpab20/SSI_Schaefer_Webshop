// HardwareCard.tsx
import React from 'react';
import '../stylesheets/hardwareCard.css';
import { HardwareInt } from "../interface/HardwareInt";

interface HardwareProps {
    item: HardwareInt;
    onBuy: (product: HardwareInt) => void;
}

const HardwareCard: React.FC<{ hardwareItem: HardwareProps }> = ({ hardwareItem }) => {
    const handleReservation = () => {
        hardwareItem.onBuy(hardwareItem.item);
    };

    return (
        <div className="hardwareCard">
            <h1>{hardwareItem.item.ARTIKELNR}</h1>
            <p>{`Name: ${hardwareItem.item.BEZEICH}`}</p>
            <p>{`ID: ${hardwareItem.item.ANLAGENNR}`}</p>
            <p>{`Preis: ${hardwareItem.item.PREIS}€`}</p>
            <button> <a href={`mailto:gigpab20@htl-kaindorf.at?subject=Reservierung: ${hardwareItem.item.BEZEICH}`}
               onClick={handleReservation}
               className="email-link">
                Reservieren
            </a> </button>
        </div>
    );
};

export default HardwareCard;
