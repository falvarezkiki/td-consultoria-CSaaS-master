import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Pregunta } from "./pregunta.entity";
import { ProposicionTeorica } from "./proposicion-teorica.entity";
import { EstudioCaso } from "../../estudio-caso/entities/estudio-caso.entity";
import { UnidadAnalisis } from "../../unidad-analisis/entities/unidad-analisis.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Caso {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nombre: string;

    @ApiProperty()
    @Column()
    descripcion: string;

    @ManyToOne(type => EstudioCaso, estudioCaso => estudioCaso.casos)
    estudioCaso: EstudioCaso;

    @ApiProperty()
    @OneToMany(type => Pregunta, pregunta => pregunta.caso,{
        cascade: true
    })
    preguntas: Pregunta[];

    @ApiProperty()
    @ManyToMany(type => ProposicionTeorica, proposicion => proposicion.casos)
    @JoinTable()
    proposicionesTeoricas: ProposicionTeorica[];

    @ApiProperty()
    @OneToMany(type => UnidadAnalisis, unidad => unidad.caso)
    unidadesAnalisis: UnidadAnalisis[];
}