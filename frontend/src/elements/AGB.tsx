import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/stylesheets/contentPage.css';
import HeaderNoSort from './HeaderNoSort';

const AGB: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderNoSort />
            <div className="content-container">
                <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
                <h2>1. Geltungsbereich</h2>
                <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen SSI Schäfer
                    und ihren Kunden in der jeweils zum Zeitpunkt des Vertragsschlusses aktuellen Fassung.
                </p>

                <h2>2. Vertragsabschluss</h2>
                <p>
                    Der Vertrag kommt zustande, indem der Kunde durch Absendung einer Bestellung ein verbindliches
                    Angebot abgibt, das von SSI Schäfer durch eine Auftragsbestätigung per E-Mail angenommen wird.
                </p>

                <h2>3. Preise und Zahlungsbedingungen</h2>
                <p>
                    Die angegebenen Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt
                    wahlweise per Vorkasse, Kreditkarte oder anderen angebotenen Zahlungsmethoden. Der Rechnungsbetrag
                    ist sofort nach Erhalt der Rechnung ohne Abzug fällig.
                </p>

                <h2>4. Lieferung und Versand</h2>
                <p>
                    Die Lieferung erfolgt an die vom Kunden angegebene Lieferadresse. Angaben über Lieferfristen sind
                    unverbindlich, soweit nicht ausnahmsweise der Liefertermin verbindlich zugesagt wurde.
                </p>

                <h2>5. Eigentumsvorbehalt</h2>
                <p>
                    Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen im Eigentum von SSI Schäfer.
                </p>

                <h2>6. Gewährleistung und Haftung</h2>
                <p>
                    Es gelten die gesetzlichen Gewährleistungsrechte. SSI Schäfer haftet nur für Schäden, die auf
                    vorsätzliche oder grob fahrlässige Pflichtverletzungen zurückzuführen sind.
                </p>

                <h2>7. Rücktrittsrecht</h2>
                <p>
                    Der Kunde hat das Recht, binnen vierzehn Tagen ohne Angabe von Gründen vom Vertrag zurückzutreten.
                    Die Rücktrittsfrist beträgt vierzehn Tage ab dem Tag, an dem der Kunde oder ein von ihm benannter
                    Dritter die Waren in Besitz genommen hat.
                </p>

                <h2>8. Datenschutz</h2>
                <p>
                    SSI Schäfer erhebt und verwendet die personenbezogenen Daten des Kunden ausschließlich im Rahmen der
                    gesetzlichen Bestimmungen des Datenschutzrechts. Weitere Informationen hierzu finden Sie in unserer
                    Datenschutzerklärung.
                </p>

                <h2>9. Schlussbestimmungen</h2>
                <p>
                    Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder undurchführbar sein oder nach
                    Vertragsschluss unwirksam oder undurchführbar werden, bleibt davon die Wirksamkeit des Vertrages im
                    Übrigen unberührt.
                </p>

                <p>
                    SSI Schäfer
                </p>

                <button className="button" onClick={() => navigate("/")}>
                    Zurück
                </button>
            </div>
        </>
    );
};

export default AGB;
