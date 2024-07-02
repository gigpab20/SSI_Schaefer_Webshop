export interface HardwareInt
{
    ARTIKELNR: string;
    BEZEICH: string;
    BESCHREIBUNG: string;
    SERIENNR: string;
    ANLAGENNR: number|undefined;
    WE_DATUM: string;
    PREIS?: string;
    KOMMENTAR: string;
    RESERVIERT: number;
}