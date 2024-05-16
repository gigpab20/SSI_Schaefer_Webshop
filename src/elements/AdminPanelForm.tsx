import React, {useState} from 'react';
import { HardwareInt } from '../interface/HardwareInt';

interface AdminPanelProps {
    item: HardwareInt
    onSave: (item:HardwareInt) => void
}

function AdminPanelForm({item, onSave}:AdminPanelProps) {


    const handleSubmit = () => {

        const articleNumber = document.getElementById("articleNumber") as HTMLInputElement;
        const seriesNumber = document.getElementById("seriesNumber") as HTMLInputElement;
        const bezeichnung = document.getElementById("bezeichnung") as HTMLInputElement;
        const anlagenNummer = document.getElementById("bezeichnung") as HTMLInputElement;
        const price = document.getElementById("bezeichnung") as HTMLInputElement;
        const description = document.getElementById("bezeichnung") as HTMLInputElement;
        const comment = document.getElementById("bezeichnung") as HTMLInputElement;
        const buyDate = document.getElementById("bezeichnung") as HTMLInputElement;


        const newItem:HardwareInt = {
            ARTIKELNR: articleNumber.value,
            SERIENNR: seriesNumber.value,
            BEZEICH: bezeichnung.value,
            ANLAGENNR: parseInt(anlagenNummer.value),
            PREIS: price.value,
            BESCHREIBUNG: description.value,
            KOMMENTAR: comment.value,
            WE_DATUM: buyDate.value,
            RESERVIERT: item.RESERVIERT
        }

            console.log(newItem);
            console.log("::::::::::::::::::::::::::::::::::");


    };

    return (
        <div className={"flex-grow bg-white p-4"}>
            <h2 className={"text-xl font-bold mb-4"}>Artikel bearbeiten</h2>
            <form className={"flex flex-grow"}>
                <div className={"flex-none w-1/2 bg-gray-300 p-4"}>
                    <div className={"mb-4"}>
                        <label
                            htmlFor="articleNumber"
                            className="block text-sm font-medium text-gray-700">
                            Artikelnummer
                        </label>
                        <input
                            type="text"
                            id="articleNumber"
                            name="articleNumber"
                            value={item.ARTIKELNR}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="seriesNumber"
                            className="block text-sm font-medium text-gray-700">
                            Seriennummer
                        </label>
                        <input
                            type="text"
                            id="seriesNumber"
                            name="seriesNumber"
                            value={item.SERIENNR}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="bezeichnung"
                            className="block text-sm font-medium text-gray-700">
                            Bezeichnung
                        </label>
                        <input
                            type="text"
                            id="bezeichnung"
                            name="bezeichnung"
                            value={item.BEZEICH}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="anlagenNummer"
                            className="block text-sm font-medium text-gray-700">
                            Anlagennummer
                        </label>
                        <input
                            type="text"
                            id="anlagenNummer"
                            name="anlagenNummer"
                            value={item.ANLAGENNR}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700">
                            Preis
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={item.PREIS}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className={"flex-grow bg-gray-300 p-4"}>
                    <div className={"mb-4"}>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700">
                                Beschreibung
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={item.BESCHREIBUNG}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    </textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-700">
                                Kommentar
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={item.KOMMENTAR}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    </textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="buyDate"
                                className="block text-sm font-medium text-gray-700">
                                Anschaffungsdatum
                            </label>
                            <input
                                type="text"
                                id="buyDate"
                                name="buyDate"
                                value={item.WE_DATUM}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => {handleSubmit()}}>
                                Änderung Speichern
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AdminPanelForm;