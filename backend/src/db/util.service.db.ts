import oracledb, { Connection, Result} from "oracledb";
import { HardwareInt } from "../model/HardwareInt";
import {it} from "node:test";

const dbConfig: oracledb.ConnectionAttributes = {
    user: 'mosdab20',
    password: 'mosdab20',
    connectString: 'db3.htl-kaindorf.at:1521/SCHUELER_PDB'
};

let connection: Connection;

export const connectDB = async () => {
        await oracledb.createPool(dbConfig);
        console.log("### successfully connected to Database");
}

export const getAll = async () => {

    connection = await oracledb.getConnection();
    const result = await connection.execute(
        'SELECT * FROM ARTIKELTABLE ORDER BY PREIS ASC');
    connection.close();
    //console.log(":::::::::::::::::: in mossb getAll !!::::::::::::::::::");

    //console.log(result.rows);


        const result2 = JSON.stringify(result.rows);

    const hardwareData: HardwareInt[] | undefined = result.rows?.map((row: any) => {
        //console.log(row[5]);
        return {
            ARTIKELNR: row[0],
            BEZEICH: row[1],
            BESCHREIBUNG: row[2],
            SERIENNR: row[3],
            ANLAGENNR: row[4],
            WE_DATUM: row[5],
            PREIS: row[6],
            KOMMENTAR: row[7],
            RESERVIERT: row[8]
        };
    });

    return hardwareData;
    
}

export const getAllInPrice = async (price:number) => {
    connection = await oracledb.getConnection();

    const dbResponse = await connection.execute(
        "SELECT * FROM ARTIKELTABLE WHERE PREIS < " + price + " ORDER BY PREIS ASC"
        /*"SELECT      ARTIKELNR, BEZEICH, SERIENNR, ANLAGENNR, WE_DATUM, PREIS\n" +
            "FROM        ARTIKELTABLE\n" +
            "WHERE       PREIS < " + price + " \n" +
            "ORDER BY    PREIS ASC"*/
    );

    connection.close();

    //console.log("::::::::::::::: in util service :::::::::::::::")

    //console.log(dbResponse.rows);

    const editRes = JSON.stringify(dbResponse.rows);

    //idk whats wrong tbh but it works and i dont have any nerves anymore to fix it
    //TODO: fix this prob (no prio)
    const products: HardwareInt[] | undefined = dbResponse.rows?.map((row: any) => {
        return {

            ARTIKELNR: row[0],
            BEZEICH: row[1],
            BESCHREIBUNG: row[2],
            SERIENNR: row[3],
            ANLAGENNR: row[4],
            WE_DATUM: row[5],
            PREIS: row[6],
            KOMMENTAR: row[7],
            RESERVIERT: row[8]
            /*ID: row[0],
            BEZEICH: row[1],
            SERIENNR: row[2],
            ANLAGENNR: row[3],
            WE_DATUM: row[4],
            PREIS: row[5]*/
        }
    })

    return products;
}

export async function updateProduct(item: HardwareInt) {
    connection = await oracledb.getConnection();

    console.log(item);
    console.log(item.BEZEICH);

    const res = await connection.execute(
        "UPDATE ARTIKELTABLE " +
        "SET BEZEICH = '" + item.BEZEICH + "'," +
        "BESCHREIBUNG = '" + item.BESCHREIBUNG + "'," +
        "SERIENNR = '" + item.SERIENNR + "'," +
        "WE_DATUM = TO_DATE('" + item.WE_DATUM + "', 'dd.MM.yyyy')," +
        "KOMMENTAR = '" + item.KOMMENTAR + "'," +
        "RESERVIERT = 1 " +
        "WHERE ARTIKELNR = '" + item.ARTIKELNR + "';"
    )

    console.log("::::::::::::::: in util service (updateProduct) :::::::::::::::")

    connection.close()
}
