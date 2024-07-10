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
        const products = MockData.getMockHardwareData(); // Verwenden Sie Mock-Daten
        console.log("Products loaded: ", products);
        setHardware(products);
    }, []);

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
        <div className={"flex flex-col h-screen"}>
            <div className={"flex-none h-16 custom-header-bg flex items-center justify-between px-4"}>
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
            <div className={"flex flex-grow"}>
                <div className={"flex-none w-1/4 bg-red-400 p-4"}>
                    {hardware.length > 0 ? (
                        hardware.map(item => (
                            <AdminItem key={item.ARTIKELNR} onChooseProduct={() => onChooseProduct(item)} item={item} />
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
                <AdminPanelForm item={selectedItem} onSave={onSaveChanges} />
            </div>
        </div>
    );
}

export default TestAdminPanel;
