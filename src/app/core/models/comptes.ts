import{Client} from "./client";
import { Operation } from "./operation";

export interface Compte{
    id:number;
    balance:number;
    tauxInteret:number;
    decouvert:number;
    createAt:Date;
    client:Client;
    devis:string;
    numCompte:string;
    status:any;
    operations?: Array<Operation>;

}