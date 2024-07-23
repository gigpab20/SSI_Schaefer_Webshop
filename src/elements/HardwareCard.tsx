import React from 'react';
import '../stylesheets/hardwareCard.css';
import { HardwareInt } from "../interface/HardwareInt";
import axios from 'axios';

interface HardwareProps {
    item: HardwareInt;
    onBuy: (product: HardwareInt) => void;
}

const HardwareCard: React.FC<{ hardwareItem: HardwareProps }> = ({ hardwareItem }) => {
    const handleReservation = async () => {
        try {
            hardwareItem.onBuy(hardwareItem.item);

            await axios.post('http://localhost:3002/send-email', {
                email: 'jonas.brunner2802@gmail.com',
                subject: `Reservierung: ${hardwareItem.item.ARTIKELNR}`,
                text: `Sie haben erfolgreich ${hardwareItem.item.BEZEICH} reserviert.`
            });
        } catch (error) {
            console.error('Error during reservation:', error);
            alert('Es gab einen Fehler bei der Reservierung. Bitte versuchen Sie es erneut.');
        }
    };
//C:\inetpub\wwwroot_tools\
    return (
        <div className="card">
            <div className="card-details">
                <h1 className="text-title">{hardwareItem.item.ARTIKELNR}</h1>
                <p className="text-body">{`Name: ${hardwareItem.item.BEZEICH}`}</p>
                <p className="text-body">{`ID: ${hardwareItem.item.ANLAGENNR}`}</p>
                <p className="text-body">{`Preis: ${hardwareItem.item.PREIS}€`}</p>
                <button className="btn-reserve card-button" onClick={handleReservation}>
                    <a href={`mailto:gigpab20@htl-kaindorf.at?subject=Reservierung: ${hardwareItem.item.ARTIKELNR}`} className="email-link">
                        Reservieren
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HardwareCard;
