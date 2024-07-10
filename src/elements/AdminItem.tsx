import React from 'react';
import { HardwareInt } from "../interface/HardwareInt";

interface AdminItemProps {
    onChooseProduct: (item: HardwareInt) => void;
    item: HardwareInt;
}

function AdminItem({ onChooseProduct, item }: AdminItemProps) {
    return (
        <div>
            <ul className="flex flex-col divide-y divide">
                <li className="flex flex-row">
                    <div className="flex items-center flex-1 p-4 select-none">
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">
                                {item.ANLAGENNR}
                            </div>
                            <div className="text-sm text-gray-600">
                                {item.BEZEICH}
                            </div>
                        </div>
                        <button className="flex justify-end w-24 text-right" onClick={() => { onChooseProduct(item) }}>
                            <svg
                                width="20"
                                fill="currentColor"
                                height="20"
                                className="text-gray-500 hover:text-gray-800"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19 19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AdminItem;
