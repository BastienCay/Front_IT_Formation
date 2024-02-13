import { Adresse } from "./adresse.model";
import { SousTheme } from "./sous-theme.model";

export class Formation {
    id!: Number;
    nom: String;
    descriptionMinimum: String;
    descriptionDetailler: String;
    prix: Number;
    nbrJour: Number;
    reference: String;
    typeFormation: String;
    preRequis: String;
    typeCertification: String;
    metiers: String;
    adresse!: Adresse;
    sousTheme!: SousTheme
    

    constructor(nom: String,descriptionMinimum: String, descriptionDetailler: String,prix: Number,nbrJour: Number,reference: String,typeFormation: String,preRequis: String,typeCertification: String,metiers: String, adresse:Adresse, sousTheme:SousTheme){
        this.nom = nom;
        this.descriptionMinimum = descriptionMinimum;
        this.descriptionDetailler = descriptionDetailler;
        this.prix = prix;
        this.nbrJour = nbrJour;
        this.reference = reference;
        this.typeFormation = typeFormation;
        this.preRequis = preRequis;
        this.typeCertification = typeCertification;
        this.metiers = metiers;
    }
}