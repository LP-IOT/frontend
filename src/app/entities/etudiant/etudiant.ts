import { Admission } from "../admission/admission";
import { Copie } from "../copie/copie";
import { Epreuve } from "../epreuve/epreuve";
import { Groupe } from "../groupe/groupe";
import { Ufr } from "../ufr/ufr";
import { Vague } from "../vague/vague";

export class Etudiant {
    id!: string;
    nom!: string;
    prenom!: string;
    epreuve!: Epreuve;
    groupe!: Groupe;
    ufr!: Ufr;
    vague!: Vague;
    admission!: Admission;
    copies!: Copie[];
}
