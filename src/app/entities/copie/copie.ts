import { Domaine } from "../domaine/domaine";
import { Epreuve } from "../epreuve/epreuve";
import { Etudiant } from "../etudiant/etudiant";
import { Lot } from "../lot/lot";

export class Copie {
    note!: number;
    etudiant!: Etudiant;
    domaine!: Domaine;
    lot!: Lot;
    epreuve!: Epreuve;
}
