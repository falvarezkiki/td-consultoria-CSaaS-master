import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { Caso } from "./caso.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Pregunta {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;


    @ApiProperty()
    @Column()
    pregunta: string;

    @ManyToOne(type => Caso, caso => caso.preguntas)
    caso: Caso;

    constructor(partial: Partial<Pregunta>) {
        Object.assign(this, partial);
    }
}