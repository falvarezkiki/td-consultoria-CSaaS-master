import { ApiProperty } from "@nestjs/swagger";

export class CreateCasoDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    idEstudioCaso: number;

    @ApiProperty()
    preguntas: string[];
}