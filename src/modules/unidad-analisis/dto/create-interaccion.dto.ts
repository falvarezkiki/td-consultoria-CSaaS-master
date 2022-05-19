import { EvidenciaDto } from "./evidencia.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateInteraccionDto {
    @ApiProperty()
    idUnidadAnalisis: number;

    @ApiProperty()
    evidencias: EvidenciaDto[];
}