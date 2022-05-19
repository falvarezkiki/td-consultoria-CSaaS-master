import { ComponenteDto } from "./componente.dto";
import { TipoComponenteEnum } from "../enums/tipo-componente.enum";
<<<<<<< HEAD
=======
import { ApiProperty } from "@nestjs/swagger";
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

export class UpdateUnidadAnalisisDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    descripcion: string;
<<<<<<< HEAD
    tipo: TipoComponenteEnum;
=======

    @ApiProperty()
    tipo: TipoComponenteEnum;

    @ApiProperty()
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    idCaso: number;

    @ApiProperty()
    componentes: ComponenteDto[];
}