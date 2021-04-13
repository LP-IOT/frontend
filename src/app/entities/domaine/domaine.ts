import { Admission } from "../admission/admission";
import { Copie } from "../copie/copie";

export class Domaine {
    nom!: string;
    domaine!: Domaine[];
    copies!: Copie[];
    admission!: Admission;
}
