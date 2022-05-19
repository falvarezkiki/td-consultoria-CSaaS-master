import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Caso } from "./caso.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()   
export class ProposicionTeorica {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nombre: string;

    @ManyToMany(type => Caso, caso => caso.proposicionesTeoricas)
    casos: Caso[];

    constructor(partial: Partial<ProposicionTeorica>) {
        Object.assign(this, partial);
    }
}