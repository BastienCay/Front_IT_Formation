export class Adresse {
    id!: Number;
    codePostal: String;
    ville: String;
    rue: String;
    pays: String;

    constructor(codePostal: String, ville: String, rue: String, pays: String){
        this.codePostal = codePostal;
        this.ville = ville;
        this.rue = rue;
        this.pays = pays;
    }
}