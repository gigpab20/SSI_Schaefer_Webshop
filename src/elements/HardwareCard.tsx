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
        <div className="card">
            <div className="card-details">
                <h1 className="text-title">{hardwareItem.item.ARTIKELNR}</h1>
                <p className="text-body">{`Name: ${hardwareItem.item.BEZEICH}`}</p>
                <p className="text-body">{`ID: ${hardwareItem.item.ANLAGENNR}`}</p>
                <p className="text-body">{`Preis: ${hardwareItem.item.PREIS}€`}</p>
                <button className="btn-reserve card-button">
                    <a href={`mailto:gigpab20@htl-kaindorf.at?subject=Reservierung: ${hardwareItem.item.ARTIKELNR}`}
                       onClick={handleReservation}
                       className="email-link">
                        Reservieren
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HardwareCard;
