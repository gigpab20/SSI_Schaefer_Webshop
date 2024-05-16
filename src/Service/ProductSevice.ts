import { HardwareInt } from "../interface/HardwareInt";
import axios from "axios";

export class ProductSevice {

    private static readonly BASE_URL = 'http://localhost:3001/products';

    public static async getProducts(): Promise<HardwareInt[]> {
        const response = await axios.get<HardwareInt[]>(this.BASE_URL);
        return response.data;
    }

    public static async getProductsByPrice(price: number): Promise<HardwareInt[]> {
        const res = await axios.get<HardwareInt[]>(this.BASE_URL + "/" + price);
        console.log("::::::::::::::: in ProductService :::::::::::::::");
        console.log(res.data);
        return res.data;
    }

    public static async updateProduct(item:HardwareInt) {
        const response = await axios.patch(this.BASE_URL, {item}).then(response => {
        console.log('Patch erfolgreich:', response);
      })
    }

}
