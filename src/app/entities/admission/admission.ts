import { Domaine } from "../domaine/domaine";
import { Etudiant } from "../etudiant/etudiant";

export class Admission {
    resultatQualitatif!: string;
    resultatQuantitatif!: number;
    dateCapitalisation!: Date;
    etudiants!: Etudiant[];
    domaines!: Domaine[];
}
