import { Compte } from "./comptes";

export interface Operation{
    compte:Compte;
    id:number;
    numOperation:string;
    dateOperation:Date;
    typeOperation:string;
}