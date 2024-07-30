/*

Auftrag:
Eigene Karte wo die wichtigsten Produktdetails angezeigt werden, Mail schicken was die wichtigsten sachen sind, und ob es ein Foto gibt
Antwort: kein Foto, Artikelnummer, Bezeichnung, Anlagennummer & Preis

nächste Frage:

Abwicklung bei Reservieren klick:

Antwort:
"Variante1: Automatische Erstellung eines Tickets im Ticketsystem (schätze ich sehr aufwändig ein, wäre die Beste Lösung)
Variante2: Daten werden im Portal vom User eingesehen, dieser legt dann händisch ein Ticket mit diesen Daten an (wie es bisher auch der Fall war, völlig ausreichend)
Für mich wäre beides in Ordnung, würde mich nach euren Möglichkeiten richten.
Zusatz: Option ein Gerät zu reservieren um doppelte Anfragen zu verhindern."

wir nehmen Variante 2 aber mit dem Zusatz (Idee von Paul) eine Email an die Buchhaltung, automatisch, nach dem Reservier-Klick per mailTo methode

 */


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

        } catch (error: any) {  // Typisieren Sie den Fehler als `any`
            console.error('Error during reservation:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error(`Es gab einen Fehler bei der Reservierung: ${error.response.data.message || error.response.data}`);
            } else {
                console.error('Es gab einen Fehler bei der Reservierung. Bitte versuchen Sie es erneut.');
            }
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
