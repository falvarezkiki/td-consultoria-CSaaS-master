import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { UnidadAnalisis } from "./unidad-analisis.entity";
import { TipoComponenteEnum } from "../enums/tipo-componente.enum";

@Entity()
export class Componente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idComponente: number;

    @ManyToOne(type => UnidadAnalisis, unidadAnalisis => unidadAnalisis.componentes)
    unidadAnalisis: UnidadAnalisis;

    constructor(partial: Partial<Componente>) {
        Object.assign(this, partial);
    }
}