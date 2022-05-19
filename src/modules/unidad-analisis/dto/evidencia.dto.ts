import { ApiProperty } from "@nestjs/swagger";

export class EvidenciaDto {
    @ApiProperty()
    idEvidencia: number;

    @ApiProperty()
    tipo: string;
}