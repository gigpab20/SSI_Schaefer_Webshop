import React, { useEffect, useState } from 'react';
import AdminPanelForm from "../elements/AdminPanelForm";
import AdminItem from "../elements/AdminItem";
import { HardwareInt } from "../interface/HardwareInt";
import { ProductSevice } from "../Service/ProductSevice";
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate, um die Navigation zu steuern
import "../stylesheets/adminPanel.css";

function TestAdminPanel() {
    const [hardware, setHardware] = useState<HardwareInt[]>([]);
    const navigate = useNavigate(); // Initialisiere useNavigate

    const [selectedItem, setSelectedItem] = useState<HardwareInt>({
        ARTIKELNR: "",
        BEZEICH: "",
        BESCHREIBUNG: "",
        SERIENNR: "",
        ANLAGENNR: 0,
        WE_DATUM: "",
        PREIS: "",
        KOMMENTAR: "",
        RESERVIERT: 0
    });

    useEffect(() => {
        ProductSevice.getProducts().then(products => {
            setHardware(products);
            console.log(products);
        });
    }, []);

    function onChooseProduct(item: HardwareInt) {
        setSelectedItem(item);
    }

    function onSaveChanges(item: HardwareInt) {
        console.log(":::::::::::::::::::::::::::::hier im onSave:::::::::::::::::::::::::::::");
        ProductSevice.updateProduct(item);
    }

    return (
        <div className={"flex flex-col h-screen"}>
            <div className={"flex-none h-16 bg-[#ffed00] flex items-center justify-between px-4"}>
                <div>
                    <a href="https://www.ssi-schaefer.com/de-at" target="_blank" rel="noopener noreferrer">
                        <img className="h-12 w-auto" src="/assets/schäfer-logo-removebg.png" alt="SSI Schäfer Logo"/>
                    </a>
                </div>
                <div>
                    <button className="btn cube cube-hover" type="button" onClick={() => navigate('/mainPage')}>
                        <div className="bg-top">
                            <div className="bg-inner"></div>
                        </div>
                        <div className="bg-right">
                            <div className="bg-inner"></div>
                        </div>
                        <div className="bg">
                            <div className="bg-inner"></div>
                        </div>
                        <div className="text">Main Page</div>
                    </button>
                </div>
            </div>
            <div className={"flex flex-grow"}>
                <div className={"flex-none w-1/4 bg-red-400 p-4"}>
                    {hardware.map(item => (
                        <AdminItem key={item.ARTIKELNR} onChooseProduct={() => onChooseProduct(item)} item={item} />
                    ))}
                </div>
                <AdminPanelForm item={selectedItem} onSave={onSaveChanges} />
            </div>
        </div>
    );
}

export default TestAdminPanel;
