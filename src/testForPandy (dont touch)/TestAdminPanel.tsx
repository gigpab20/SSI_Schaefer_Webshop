import React, {useEffect, useState} from 'react';
import Header from "../elements/Header";
import AdminPanelForm from "../elements/AdminPanelForm";
import AdminItem from "../elements/AdminItem";
import {HardwareInt} from "../interface/HardwareInt";
import Mainpage from "../elements/Mainpage";
import {ProductSevice} from "../Service/ProductSevice";

function TestAdminPanel() {

    const [hardware, setHardware] = useState<HardwareInt[]>([]);

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

    function onChooseProduct (item: HardwareInt) {
        //window.location.assign("https://http.cat/status/102");
        setSelectedItem(item);
    }
    function onSaveChanges (item:HardwareInt){
        console.log(":::::::::::::::::::::::::::::hier im onSave:::::::::::::::::::::::::::::");
        ProductSevice.updateProduct(item)
    }

    return (
        <div className={"flex flex-col h-screen"}>
            <div className={"flex-none h-16 bg-amber-400 flex items-center justify-between px-4"}>
                <div>
                    <img src={"https://http.cat/status/102"} alt={"logo"} className={"h-8"}/>
                </div>
                <div>
                    <a href={"/mainPage"} className={"text-red-700"}>Main Page</a>
                </div>
            </div>
            <div className={"flex flex-grow"}>
                <div className={"flex-none w-1/4 bg-red-400 p-4"}>
                    {hardware.map(item => (
                        <AdminItem onChooseProduct={() => onChooseProduct(item)} item={item}></AdminItem>
                    ))}

                </div>
                <AdminPanelForm item={selectedItem} onSave={onSaveChanges}></AdminPanelForm>
            </div>
        </div>
    );
}


export default TestAdminPanel;