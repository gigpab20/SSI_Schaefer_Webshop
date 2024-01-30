export const oracledb = require('oracledb');

const dbConfig = {
    user: 'mosdab20',
    password: 'mosdab20',
    connectString: 'db3.htl-kaindorf.at:1521/SCHUELER_PDB'
};


export const connectDB = async () => {
   await oracledb.createPool(dbConfig);

   console.log("### successfully connected to Database");
}