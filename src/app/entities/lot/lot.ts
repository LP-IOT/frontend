import { Copie } from "../copie/copie";
import { Correcteur } from "../correcteur/correcteur";

export class Lot {
    numLot!: string;
    correcteur!: Correcteur[];
    copies!: Copie[];
    salles!: Salle[];
}
