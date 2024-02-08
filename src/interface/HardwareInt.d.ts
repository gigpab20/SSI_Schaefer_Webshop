/*export interface HardwareInt {
    "name":string,
    "productNum":string,
    "price":number,
    "pictureLink":string,
    "category":string
}*/


export interface HardwareInt
{
    ID: number;
    ARTIKEL: string;
    BEZEICH: string;
    MEMO_KAUFT: string;
    SERIENNR: string;
    ANLAGENNR: string;
    WE_DATUM: string;
    PREIS?: string;
    PICTURELINK?: string;
}
