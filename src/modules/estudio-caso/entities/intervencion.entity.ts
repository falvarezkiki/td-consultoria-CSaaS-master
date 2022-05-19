import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { EstudioCaso } from "./estudio-caso.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Intervencion {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    idIntervencion: number;

    @ManyToOne(type => EstudioCaso, estudioCaso => estudioCaso.intervenciones)
    estudioCaso: EstudioCaso;

    constructor(partial: Partial<Intervencion>) {
        Object.assign(this, partial);
    }
}