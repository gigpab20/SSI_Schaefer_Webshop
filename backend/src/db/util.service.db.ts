import sql from 'mssql';
import { HardwareInt } from "../model/HardwareInt";

const dbConfig: sql.config = {
    user: 'PEEMDOMAIN\\jbn',
    password: 'ssigraz0815!',
    server: 'atgradbtst01',
    database: 'AMS_GRA'
};

export const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log("### erfolgreich mit der Datenbank verbunden");
    } catch (error) {
        console.error("Fehler beim Verbinden mit der Datenbank:", error);
    }
}

export const getAll = async () => {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM ARTIKELTABLE ORDER BY PREIS ASC');

        const hardwareData: HardwareInt[] = result.recordset.map((row: any) => {
            return {
                ARTIKELNR: row.ARTIKELNR,
                BEZEICH: row.BEZEICH,
                BESCHREIBUNG: row.BESCHREIBUNG,
                SERIENNR: row.SERIENNR,
                ANLAGENNR: row.ANLAGENNR,
                WE_DATUM: row.WE_DATUM,
                PREIS: row.PREIS,
                KOMMENTAR: row.KOMMENTAR,
                RESERVIERT: row.RESERVIERT
            };
        });

        return hardwareData;
    } catch (error) {
        console.error("Fehler beim Abrufen aller Hardwareartikel:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

export const getAllInPrice = async (price: number) => {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        const result = await pool.request().query(`SELECT * FROM ARTIKELTABLE WHERE PREIS < ${price} ORDER BY PREIS ASC`);

        const products: HardwareInt[] = result.recordset.map((row: any) => {
            return {
                ARTIKELNR: row.ARTIKELNR,
                BEZEICH: row.BEZEICH,
                BESCHREIBUNG: row.BESCHREIBUNG,
                SERIENNR: row.SERIENNR,
                ANLAGENNR: row.ANLAGENNR,
                WE_DATUM: row.WE_DATUM,
                PREIS: row.PREIS,
                KOMMENTAR: row.KOMMENTAR,
                RESERVIERT: row.RESERVIERT
            };
        });

        return products;
    } catch (error) {
        console.error("Fehler beim Abrufen der Hardwareartikel im Preisbereich:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

export async function updateProduct(item: HardwareInt) {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        await pool.request().query(
            `UPDATE ARTIKELTABLE SET 
                BEZEICH = '${item.BEZEICH}', 
                BESCHREIBUNG = '${item.BESCHREIBUNG}', 
                SERIENNR = '${item.SERIENNR}', 
                WE_DATUM = '${item.WE_DATUM}', 
                KOMMENTAR = '${item.KOMMENTAR}', 
                RESERVIERT = 1 
            WHERE ARTIKELNR = '${item.ARTIKELNR}'`
        );
        await pool.request().query("COMMIT");
    } catch (error) {
        console.error("Fehler beim Aktualisieren des Produkts:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

export async function reserveHardware(artikel: string, anzahl: string, persnr: string) {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        await pool.request().query(`EXEC SP_HARDWAREVERKAUF_RESERVIEREN '${artikel}', '${anzahl}', '${persnr}'`);
        await pool.request().query("COMMIT");
    } catch (error) {
        console.error("Fehler beim Reservieren der Hardware:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

export async function returnHardware(artikel: string, anzahl: number, persnr: string) {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        await pool.request().query(`EXEC SP_HARDWAREVERKAUF_ZURUECKBUCHEN '${artikel}', ${anzahl}, '${persnr}'`);
        await pool.request().query("COMMIT");
    } catch (error) {
        console.error("Fehler beim Zurückbuchen der Hardware:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

export async function getHardwareTransactions(datumVon: string, datumBis: string) {
    let pool: sql.ConnectionPool | null = null;
    try {
        pool = await sql.connect(dbConfig);
        const result = await pool.request().query(`EXEC sp_VAL_EDV_Hardware_Buchungen_Anlagevermoegen '${datumVon}', '${datumBis}'`);
        return result.recordset;
    } catch (error) {
        console.error("Fehler beim Abrufen der Hardwaretransaktionen:", error);
        throw error;
    } finally {
        if (pool) {
            pool.close();
        }
    }
}
