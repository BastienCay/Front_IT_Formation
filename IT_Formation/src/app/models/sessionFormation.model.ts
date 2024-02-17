import { Formateur } from "./formateur.model";
import { Formation } from "./formation.model";

export class SessionFormation {
    id:Number;
    dateDebut: Date;
    dateFin: Date;
    formation: Formation;
    formateur: Formateur;

    constructor(id:Number,dateDebut: Date,dateFin: Date,formation: Formation,formateur: Formateur){
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.formation = formation;
        this.formateur = formateur;
    }

}