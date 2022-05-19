import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, JoinTable, OneToOne } from "typeorm";
import { Consultoria } from "./consultoria.entity";
import { Caso } from "../../caso/entities/caso.entity";
import { Intervencion } from "./intervencion.entity";
<<<<<<< HEAD
=======
import { ApiProperty } from "@nestjs/swagger";
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

@Entity()
export class EstudioCaso {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    nombre: string;

    @Column()
    multicaso: boolean;

<<<<<<< HEAD
    idTratamientoTemporal: number;
=======
    /*@ApiProperty()
    @OneToOne(type => TratamientoTemporal, {
        cascade: true
    })
    @JoinColumn()
    tratamientoTemporal: TratamientoTemporal;
    */
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

    @OneToMany(type => Caso, caso => caso.estudioCaso, {
        cascade: true
    })
    casos: Caso[];

    @OneToMany(type => Consultoria, consultoria => consultoria.estudioCaso, {
        cascade: true
    })
    consultorias: Consultoria[];

    @ApiProperty()
    @OneToMany(type => Intervencion, intervencion => intervencion.estudioCaso, {
        cascade: true
    })
    intervenciones: Intervencion[];
}