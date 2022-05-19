import { ApiProperty } from "@nestjs/swagger";

export class IntervencionResponseDto {
<<<<<<< HEAD
    id: number;
=======
    @ApiProperty()
    id: number;

    @ApiProperty()
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    idConsultoria: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion: string;
}