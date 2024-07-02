import React, {ChangeEvent, useState} from 'react';
import {ProductService} from "../Service/ProductService";

const TestBackend = () => {

    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRangeValue(parseInt(event.target.value));
    }
    const onFilterPrice = () => {

        console.log(rangeValue);

        ProductService.getProductsByPrice(rangeValue);
    };


    return (
        <div>
            <input type={"number"} id={"priceRange"} value={rangeValue} min={0} max={150} onChange={handleRangeChange}/>
            <br/>
            <button value={"test backend"} onClick={onFilterPrice}>
                <a>help!!!!</a>
            </button>
        </div>
    );
};
export default TestBackend;