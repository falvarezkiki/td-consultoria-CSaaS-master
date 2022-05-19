import { NivelTemporalEnum } from "../enums/nivel-temporal.enum";
import { CanalComunicacionEnum } from "../enums/canal-comunicacion.enum";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class TratamientoTemporalDto {

    id: number;
    
    @ApiProperty({
        description: 'Si es un rango de fecha o una sola fecha'
    })
    @IsNotEmpty()
    inicioFin: boolean;

    @ApiProperty({
        description: 'Fecha de inicio'
    })
    @IsString()
    @IsNotEmpty()
    fechaInicio: Date;
    
    @ApiProperty({
        description: 'Fecha de fin'
    })
    @IsOptional()
    @IsString()
    fechaFin: Date;

    @ApiProperty({
        enum: NivelTemporalEnum,
        description: 'Nivel temporal'
    })
    @IsOptional()
    @IsString()
    nivelTemporal: NivelTemporalEnum;
    
    @ApiProperty({
        enum: CanalComunicacionEnum,
        description: 'Canal comunicacion'
    })
    @IsOptional()
    @IsString()
    canalComunicacion: CanalComunicacionEnum;

    planificacion: string;
}