// ProductService.ts
import axios from "axios";
import { HardwareInt } from "../interface/HardwareInt";

export class ProductService {
    private static readonly BASE_URL = 'http://localhost:3002/products'; // Passe den Port an

    public static async getProducts(): Promise<HardwareInt[]> {
        try {
            const response = await axios.get<HardwareInt[]>(this.BASE_URL);
            console.log("API response:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

    public static async getProductsByPrice(price: number): Promise<HardwareInt[]> {
        try {
            const response = await axios.get<HardwareInt[]>(`${this.BASE_URL}/${price}`);
            console.log("API response (by price):", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching products by price:", error);
            throw error;
        }
    }

    public static async updateProduct(item: HardwareInt): Promise<HardwareInt> {
        try {
            const response = await axios.patch<HardwareInt>(`${this.BASE_URL}/${item.ANLAGENNR}`, item);
            console.log('Patch erfolgreich:', response.data);
            return response.data;
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    }
}
