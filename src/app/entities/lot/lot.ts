import { Copie } from "../copie/copie";
import { Correcteur } from "../correcteur/correcteur";
import { Salle } from "../salle/salle";

export class Lot {
    id!: number;
    numLot!: string;
    correcteur!: Correcteur[];
    copies!: Copie[];
    salles!: Salle[];
}
