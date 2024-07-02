import { HardwareInt } from "../interface/HardwareInt";
import { MockData } from "../mockdata/MockData"; // Importieren Sie die Mock-Daten

export class ProductService {
    public static async getProducts(): Promise<HardwareInt[]> {
        // Hier werden die Mock-Daten zurückgegeben
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(MockData.getMockHardwareData());
            }, 1000); // Simuliert eine Netzwerkverzögerung
        });
    }

    public static async getProductsByPrice(price: number): Promise<HardwareInt[]> {
        // Filtern der Mock-Daten nach Preis
        return new Promise(resolve => {
            setTimeout(() => {
                const filteredProducts = MockData.getMockHardwareData().filter(item => parseFloat(item.PREIS || '0') <= price);
                resolve(filteredProducts);
            }, 1000); // Simuliert eine Netzwerkverzögerung
        });
    }

    public static async updateProduct(item: HardwareInt) {
        // Diese Methode kann leer bleiben, da wir keine echte API haben
        console.log("Produkt aktualisiert: ", item);
    }
}
