import React, { useState, useEffect } from 'react';
import { HardwareInt } from '../interface/HardwareInt';

interface AdminPanelProps {
    item: HardwareInt;
    onSave: (item: HardwareInt) => void;
}

function AdminPanelForm({ item, onSave }: AdminPanelProps) {
    const [formData, setFormData] = useState<HardwareInt>(item);

    useEffect(() => {
        setFormData(item); // Update form data when item prop changes
    }, [item]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: id === 'ANLAGENNR' ? Number(value) : value
        }));
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <div className={"flex-grow bg-white p-4"}>
            <h2 className={"text-xl font-bold mb-4"}>Artikel bearbeiten</h2>
            <div className={"flex flex-grow"}>
                <div className={"flex-none w-1/2 bg-gray-300 p-4"}>
                    <div className={"mb-4"}>
                        <label htmlFor="ARTIKELNR" className="block text-sm font-medium text-gray-700">
                            Artikelnummer
                        </label>
                        <input
                            type="text"
                            id="ARTIKELNR"
                            value={formData.ARTIKELNR}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="SERIENNR" className="block text-sm font-medium text-gray-700">
                            Seriennummer
                        </label>
                        <input
                            type="text"
                            id="SERIENNR"
                            value={formData.SERIENNR}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="BEZEICH" className="block text-sm font-medium text-gray-700">
                            Bezeichnung
                        </label>
                        <input
                            type="text"
                            id="BEZEICH"
                            value={formData.BEZEICH}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ANLAGENNR" className="block text-sm font-medium text-gray-700">
                            Anlagennummer
                        </label>
                        <input
                            type="number"
                            id="ANLAGENNR"
                            value={formData.ANLAGENNR}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="PREIS" className="block text-sm font-medium text-gray-700">
                            Preis
                        </label>
                        <input
                            type="text"
                            id="PREIS"
                            value={formData.PREIS}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className={"flex-grow bg-gray-300 p-4"}>
                    <div className={"mb-4"}>
                        <div className="mb-4">
                            <label htmlFor="BESCHREIBUNG" className="block text-sm font-medium text-gray-700">
                                Beschreibung
                            </label>
                            <textarea
                                id="BESCHREIBUNG"
                                value={formData.BESCHREIBUNG}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="KOMMENTAR" className="block text-sm font-medium text-gray-700">
                                Kommentar
                            </label>
                            <textarea
                                id="KOMMENTAR"
                                value={formData.KOMMENTAR}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="WE_DATUM" className="block text-sm font-medium text-gray-700">
                                Anschaffungsdatum
                            </label>
                            <input
                                type="date"
                                id="WE_DATUM"
                                value={formData.WE_DATUM}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>

                        <button
                            className="btn-save"
                            onClick={handleSubmit}
                        >
                            Änderung Speichern
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanelForm;
