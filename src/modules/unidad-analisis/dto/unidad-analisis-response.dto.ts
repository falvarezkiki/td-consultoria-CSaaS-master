import { TipoComponenteEnum } from "../enums/tipo-componente.enum";
import { Interaccion } from "../entities/interaccion.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UnidadAnalisisResponseDto {
<<<<<<< HEAD
    id: number;
=======
    @ApiProperty()
    id: number;

    @ApiProperty()
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    nombre: string;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    tipo: TipoComponenteEnum;

    @ApiProperty()
    interacciones: Interaccion[];

    @ApiProperty()
    componentes: any[];
}