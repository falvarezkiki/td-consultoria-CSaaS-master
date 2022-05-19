import { Caso } from "../../caso/entities/caso.entity";
import { IntervencionResponseDto } from "../../../clients/iaas/dto/intervencion-response.dto";
import { TratamientoTemporal } from "../../../clients/ttaas/tratamiento-temporal.entity";
import { TratamientoTemporalDto } from "../../../clients/ttaas/dto/tratamiento-temporal.dto";

export class EstudioCasoResponseDto {
    id: number;
    nombre: string;
<<<<<<< HEAD
    tratamientoTemporal: TratamientoTemporalDto;
=======
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    casos: Caso[];
    intervenciones: IntervencionResponseDto[];
    //tratamiento Temporal
    //Consultorias
}