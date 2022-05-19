import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { EstudioCaso } from "./estudio-caso.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Consultoria {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    idConsultoria: number;

    @ManyToOne(type => EstudioCaso, estudioCaso => estudioCaso.consultorias)
    estudioCaso: EstudioCaso;

    constructor(partial: Partial<Consultoria>) {
        Object.assign(this, partial);
    }
}