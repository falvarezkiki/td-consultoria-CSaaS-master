import { ApiProperty } from "@nestjs/swagger";

export class UpdateCasoDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    idEstudioCaso: number;

    @ApiProperty()
    preguntas: string[];
}