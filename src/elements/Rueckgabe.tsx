import React from 'react';
import HeaderNoSort from './HeaderNoSort';
import '../stylesheets/contentPage.css';

const Rueckgabe: React.FC = () => {
    return (
        <>
            <HeaderNoSort />
            <div className="content-container">
                <h1>Rückgabebedingungen</h1>
                <p>
                    Ab dem Zeitpunkt des Kaufs eines Produkts erlischt das Rückgaberecht vollständig. Dies bedeutet, dass
                    es keine Möglichkeit gibt, das Produkt zurückzugeben, sobald der Kauf abgeschlossen ist. Bitte stellen
                    Sie sicher, dass Sie Ihre Kaufentscheidung sorgfältig prüfen, da nach dem Abschluss des Kaufvorgangs
                    keine Rückerstattung oder Umtausch möglich ist.
                </p>
                <p>
                    Darüber hinaus sind Schäden, die durch unsachgemäße Handhabung, Missbrauch oder andere Handlungen des
                    Käufers verursacht wurden, ebenfalls von der Rückgabe ausgeschlossen. Das bedeutet, dass keine Rückgabe
                    oder Rückerstattung gewährt wird, wenn das Produkt aufgrund von Fahrlässigkeit, Unfällen oder absichtlicher
                    Beschädigung durch den Käufer beschädigt wird. Wir empfehlen, die Gebrauchsanweisungen sorgfältig zu lesen
                    und zu befolgen, um solche Schäden zu vermeiden.
                </p>
                <p>
                    Unsere Rückgabebedingungen stellen sicher, dass alle Kunden ihre Produkte in einwandfreiem Zustand erhalten.
                    Falls ein Produkt jedoch bei der Lieferung beschädigt oder defekt ist, kontaktieren Sie uns bitte umgehend.
                    In solchen Fällen werden wir eine Lösung finden, die entweder eine Reparatur, einen Ersatz oder eine Rückerstattung
                    umfasst, je nach den Umständen des Falls und nach unserem Ermessen.
                </p>
                <p>
                    Vielen Dank für Ihr Verständnis und Ihre Kooperation. Wir sind bestrebt, unseren Kunden die bestmögliche Erfahrung
                    zu bieten und stehen Ihnen bei Fragen oder Anliegen jederzeit zur Verfügung.
                </p>
            </div>
        </>
    );
};

export default Rueckgabe;
