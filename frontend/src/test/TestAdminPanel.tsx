import React, { useEffect, useState } from 'react';
import AdminPanelForm from "../elements/AdminPanelForm";
import AdminItem from "../elements/AdminItem";
import { HardwareInt } from "../interface/HardwareInt";
import { MockData } from "../mockdata/MockData"; // Verwenden Sie MockData anstelle von ProductService
import { useNavigate } from 'react-router-dom';
import "../stylesheets/adminPanel.css";

function TestAdminPanel() {
    const [hardware, setHardware] = useState<HardwareInt[]>([]);
    const navigate = useNavigate();

    const [selectedItem, setSelectedItem] = useState<HardwareInt>({
        ARTIKELNR: "",
        BEZEICH: "",
        BESCHREIBUNG: "",
        SERIENNR: "",
        ANLAGENNR: undefined,
        WE_DATUM: "",
        PREIS: "",
        KOMMENTAR: "",
        RESERVIERT: 0
    });

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/');
        } else {
            const products = MockData.getMockHardwareData(); // Verwenden Sie Mock-Daten
            console.log("Products loaded: ", products);
            setHardware(products);
        }
    }, [navigate]);

    function onChooseProduct(item: HardwareInt) {
        setSelectedItem(item);
    }

    function onSaveChanges(updatedItem: HardwareInt) {
        console.log(":::::::::::::::::::::::::::::hier im onSave:::::::::::::::::::::::::::::");
        setHardware(prevState =>
            prevState.map(item =>
                item.ARTIKELNR === updatedItem.ARTIKELNR ? updatedItem : item
            )
        );

        setHardware(prevState => prevState.map(item => (item.ANLAGENNR === updatedItem.ANLAGENNR ? updatedItem : item)));
        setSelectedItem(updatedItem);
    }

    return (
        <div className="admin-panel-container">
            <div className="admin-panel-header">
                <div>
                    <a href="https://www.ssi-schaefer.com/de-at" target="_blank" rel="noopener noreferrer">
                        <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="SSI Schäfer Logo"/>
                    </a>
                </div>
                <div>
                    <button className="btn-mainpage" onClick={() => navigate('/mainPage')}>
                        Main Page
                    </button>
                </div>
            </div>

            <div className="admin-panel-content">
                <div className="admin-item-list">
                    {hardware.length > 0 ? (
                        hardware.map(item => (
                            <AdminItem key={item.ARTIKELNR} onChooseProduct={() => onChooseProduct(item)} item={item} />
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
                <div className="admin-item-form">
                    <AdminPanelForm item={selectedItem} onSave={onSaveChanges} />
                </div>
            </div>
        </div>
    );
}

export default TestAdminPanel;
