<<<<<<< HEAD
import { CreateConsultoriaDto } from "./create-consultoria.dto";
import { IntervencionDto } from "./intervencion.dto";
import { CreateTratamientoTemporalDto } from "../../../clients/ttaas/dto/create-tratamiento-temporal.dto";

export class CreateEstudioCasoDto {
    nombre: string;
    multicaso: boolean;
    consultorias: CreateConsultoriaDto[];
    intervenciones: IntervencionDto[];
    tratamientoTemporal: CreateTratamientoTemporalDto;
=======
export class CreateEstudioCasoDto {
    nombre: string;
    multicaso: boolean;
    consultorias: number[];
    intervenciones: number[];
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
}