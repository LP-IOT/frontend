import { Copie } from "../copie/copie";
import { Etudiant } from "../etudiant/etudiant";

export class Epreuve {
    nom!: string;
    anneeEpreuve!: number;
    etudiants!: Etudiant[];
    copies!: Copie[];
}
