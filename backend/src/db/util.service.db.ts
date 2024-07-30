import sql from 'mssql';
import { HardwareInt } from "../model/HardwareInt";

const dbConfig: sql.config = {
    user: 'PEEMDOMAIN\\jbn',
    password: 'ssigraz0815!',
    server: 'atgradbtst01.peemdomain.at',
    database: 'AMS_GRA',
    options: {
        encrypt: false // true bei Azure
    }
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
        const result = await pool.request().query('SELECT * FROM Produkte ORDER BY Preis ASC');

        console.log(result.recordset);  // Debugging-Ausgabe

        const hardwareData: HardwareInt[] = result.recordset.map((row: any) => {
            return {
                ARTIKELNR: row.ArtikelNr,
                BEZEICH: row.Bezeich,
                BESCHREIBUNG: row.Beschreibung,
                SERIENNR: row.SerienNr,
                ANLAGENNR: row.AnlagenNr,
                WE_DATUM: row.WE_Datum,
                PREIS: row.Preis,
                KOMMENTAR: row.Kommentar,
                RESERVIERT: row.Reserviert
            };
        });

        console.log(hardwareData);  // Debugging-Ausgabe

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
        const result = await pool.request().query(`SELECT * FROM Produkte WHERE Preis < ${price} ORDER BY Preis ASC`);

        const products: HardwareInt[] = result.recordset.map((row: any) => {
            return {
                ARTIKELNR: row.ArtikelNr,
                BEZEICH: row.Bezeich,
                BESCHREIBUNG: row.Beschreibung,
                SERIENNR: row.SerienNr,
                ANLAGENNR: row.AnlagenNr,
                WE_DATUM: row.WE_Datum,
                PREIS: row.Preis,
                KOMMENTAR: row.Kommentar,
                RESERVIERT: row.Reserviert
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
            `UPDATE Produkte SET
                                 Bezeich = '${item.BEZEICH}',
                                 Beschreibung = '${item.BESCHREIBUNG}',
                                 SerienNr = '${item.SERIENNR}',
                                 WE_Datum = '${item.WE_DATUM}',
                                 Kommentar = '${item.KOMMENTAR}',
                                 Reserviert = 1
             WHERE ArtikelNr = '${item.ARTIKELNR}'`
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
