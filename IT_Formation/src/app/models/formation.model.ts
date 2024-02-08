export default interface Formation {
    id: Number,
    nom: String,
    descript: String,
    prix: Number,
    nbrJour: Number,
    reference: String,
    typeFormation: String,
    preRequis: String,
    typeCertification: String,
    metiers: String,
    adresse: {
        id: Number,
        codePostal: String,
        ville: String,
        rue: String,
        pays: String
    },
    sousTheme: {
        id: Number,
        designation: String,
        theme: {
            id: Number,
            designation: String
        }
    }
}