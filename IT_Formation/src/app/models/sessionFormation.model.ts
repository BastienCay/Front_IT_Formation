import { Formation } from "./formation.model";

export default interface SessionFormation {
    dateDebut: String,
    dateFin: String,
    formation: Formation,
}