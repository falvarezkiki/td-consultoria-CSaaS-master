import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Componente } from "./componente.entity";
import { Caso } from "../../caso/entities/caso.entity";
import { TipoComponenteEnum } from "../enums/tipo-componente.enum";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class UnidadAnalisis {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nombre: string;

    @ApiProperty()
    @Column()
    descripcion: string;
    
    @ApiProperty()
    @Column({
        type: 'enum',
        enum: TipoComponenteEnum,
    })
    tipo: TipoComponenteEnum;

    @OneToMany(type => Componente, componente => componente.unidadAnalisis, {
        cascade: true
    })
    componentes: Componente[];

    @ManyToOne(type => Caso, caso => caso.unidadesAnalisis)
    caso: Caso;
}