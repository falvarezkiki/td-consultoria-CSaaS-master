import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class TratamientoTemporal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idTratamientoTemporal: number;

    @Column()
    idNivelTemporal: number;

    @Column()
    idCanalComunicacion: number;
    
    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @Column()
    inicioFin: boolean;

    constructor(partial: Partial<TratamientoTemporal>) {
        Object.assign(this, partial);
    }
}