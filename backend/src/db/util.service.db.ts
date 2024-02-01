import oracledb, { Connection, Result} from "oracledb";
import { HardwareInt } from "../model/HardwareInt";

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
            'SELECT * ' +
            'FROM mosdab20.artikeltable');
        connection.close();
        console.log(result.rows);

        const result2 = JSON.stringify(result.rows);

    const hardwareData: HardwareInt[] | undefined = result.rows?.map((row: any) => {
        return {
            ID: row[0],
            ARTIKEL: row[1] ,
            BEZEICH: row[2],
            MEMO_KAUFT: row[3],
            SERIENNR: row[4],
            ANLAGENNR: row[5],
            WE_DATUM: row[6]
        };
    });

    return hardwareData;
    
}
