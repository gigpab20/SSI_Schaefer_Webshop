import React, { useState } from 'react';
import '../../src/stylesheets/hardwareCard.css';
import { HardwareInt } from "../../src/interface/HardwareInt";
import axios from 'axios';

interface HardwareProps {
    item: HardwareInt;
    onBuy: (product: HardwareInt) => void;
}

const HardwareCard: React.FC<{ hardwareItem: HardwareProps }> = ({ hardwareItem }) => {
    const [anzahl] = useState('1'); // Dynamisch anpassbar
    const [persnr] = useState('914798'); // Dynamisch anpassbar, da wir nicht die persnr haben aber in der prozedur ist

    const handleReservation = async () => {
        try {
            hardwareItem.onBuy(hardwareItem.item);

            const reserveResponse = await axios.post('http://localhost:3001/products/reserve', {
                artikel: hardwareItem.item.ARTIKELNR,
                anzahl: anzahl,
                persnr: persnr
            });

            console.log('Reservation response:', reserveResponse.data);

            const emailResponse = await axios.post('http://localhost:3001/send-email', {
                email: 'jonas.brunner2802@gmail.com',
                subject: `Reservierung: ${hardwareItem.item.ARTIKELNR}`,
                text: `Sie haben erfolgreich ${hardwareItem.item.BEZEICH} reserviert.`
            });

            console.log('Email response:', emailResponse.data);

        } catch (error: any) {  // Typisieren Sie den Fehler als `any`
            console.error('Error during reservation:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            alert('Es gab einen Fehler bei der Reservierung. Bitte versuchen Sie es erneut.');
        }
    };

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
