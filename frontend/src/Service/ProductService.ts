import axios from "axios";
import { HardwareInt } from "../interface/HardwareInt";

export class ProductService {
    private static readonly BASE_URL = 'http://localhost:3001/products';

    public static async getProducts(): Promise<HardwareInt[]> {
        try {
            const response = await axios.get<HardwareInt[]>(this.BASE_URL);
            console.log("API response:", response.data); // Protokollierung der API-Antwort
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

    public static async getProductsByPrice(price: number): Promise<HardwareInt[]> {
        const res = await axios.get<HardwareInt[]>(this.BASE_URL + "/" + price);
        console.log("::::::::::::::: in ProductService :::::::::::::::");
        console.log(res.data);
        return res.data;
    }

    public static async updateProduct(item: HardwareInt): Promise<HardwareInt> {
        const response = await axios.patch<HardwareInt>(`${this.BASE_URL}/${item.ANLAGENNR}`, item);
        console.log('Patch erfolgreich:', response.data);
        return response.data;
    }
}
