import { Lot } from "../lot/lot";

export class Salle {
    designation!: string;
    capaciteOrdinateur!: number;
    emplacement!: string;
    lot!: Lot;
}