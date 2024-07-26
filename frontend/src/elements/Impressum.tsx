import React from 'react';
import '../../src/stylesheets/contentPage.css';
import HeaderNoSort from './HeaderNoSort';
import { useNavigate } from 'react-router-dom';

const Impressum: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderNoSort/>
            <div className="content-container">
                <h1>Impressum</h1>
                <p><strong>SSI Schäfer</strong></p>
                <p>
                    SSI Schäfer AG<br/>
                    Fritz-Schäfer-Straße 20<br/>
                    57290 Neunkirchen<br/>
                    Deutschland
                </p>

                <h2>Kontakt</h2>
                <p>
                    Telefon: +49 2735 70-1<br/>
                    Telefax: +49 2735 70-396<br/>
                    E-Mail: info@ssi-schaefer.com<br/>
                    Internet: <a href="https://www.ssi-schaefer.com/de-de" target="_blank"
                                 rel="noopener noreferrer">www.ssi-schaefer.com</a>
                </p>

                <h2>Vertreten durch</h2>
                <p>
                    Geschäftsführer: Steffen Bersch (CEO), Bruno Krauss (CFO), Michael Mohr (CSO), Henning Schnieder
                    (CTO)
                </p>

                <h2>Registereintrag</h2>
                <p>
                    Eintragung im Handelsregister.<br/>
                    Registergericht: Amtsgericht Siegen<br/>
                    Registernummer: HRB 7106
                </p>

                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE126823944
                </p>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Steffen Bersch<br/>
                    SSI Schäfer AG<br/>
                    Fritz-Schäfer-Straße 20<br/>
                    57290 Neunkirchen<br/>
                    Deutschland
                </p>

                <h2>Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a
                    href="https://ec.europa.eu/consumers/odr" target="_blank"
                    rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br/>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <button className="button" onClick={() => navigate("/mainpage")}>
                    Zurück
                </button>
            </div>


        </>
    );
};

export default Impressum;
