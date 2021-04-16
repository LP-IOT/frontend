import { Admission } from "../admission/admission";
import { Copie } from "../copie/copie";

export class Domaine {
    id!: number;
    nom!: string;
    domaine!: Domaine[];
    copies!: Copie[];
    admission!: Admission;
}
