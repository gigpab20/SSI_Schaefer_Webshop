import { HardwareInt } from "../interface/HardwareInt";
import axios from "axios";

export class ProductSevice {

    private static readonly BASE_URL = 'http://localhost:3001/products';

    public static async getSong(): Promise<HardwareInt[]> {
        const response = await axios.get<HardwareInt[]>(this.BASE_URL);
        return response.data;
    }

}
