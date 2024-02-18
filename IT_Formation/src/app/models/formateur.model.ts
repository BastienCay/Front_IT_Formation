import { Utilisateur } from "./utilisateur.model";

export class Formateur {

    utilisateur: Utilisateur;

    constructor(utilisateur: Utilisateur){
        this.utilisateur = utilisateur
    }
}