import { Controller, Get, Query, Param, Post, Body, Put } from "@nestjs/common";
import { UnidadAnalisisService } from "../services/unidad-analisis.service";
import { InteraccionService } from "../services/interaccion.service";
import { UnidadAnalisis } from "../entities/unidad-analisis.entity";
import { CreateUnidadAnalisisDto } from "../dto/create-unidad-analisis.dto";
import { CreateInteraccionDto } from "../dto/create-interaccion.dto";
import { Interaccion } from "../entities/interaccion.entity";
import { UpdateUnidadAnalisisDto } from "../dto/update-unidad-analisis.dto";
import { TipoComponenteEnum } from "../enums/tipo-componente.enum";
import { UnidadAnalisisResponseDto } from "../dto/unidad-analisis-response.dto";
import { ApiTags, ApiResponse, ApiBody } from "@nestjs/swagger";
import { Observable } from "rxjs";


@ApiTags('Unidad de Análisis')
@Controller('unidadAnalisis')
export class UnidadAnalisisController {
    constructor(
        private unidadAnalisisService: UnidadAnalisisService,
        private interaccionService: InteraccionService
    ) { }

<<<<<<< HEAD
    @Get()
    findAllByCaso(@Query('idCaso') idCaso: number): Promise<UnidadAnalisis[]> {
        return this.unidadAnalisisService.findAllByCaso(idCaso);
    }

    @Get('/ById/:id')
=======
    @ApiResponse({
        status: 200,
        description: 'Listar unidades',
        type: [UnidadAnalisis]
    })
    @Get()
    findAll(@Query('idCaso') idCaso: number): Promise<UnidadAnalisis[]> {
        return this.unidadAnalisisService.findAll(idCaso);
    }

    @ApiResponse({
        status: 200,
        description: 'Pedir Unidad por su Id',
        type: UnidadAnalisis
    })
    @Get('/:id')
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    findOne(@Param('id') id: number): Observable<UnidadAnalisisResponseDto> {
        return this.unidadAnalisisService.findOne(id);
    }

    @ApiResponse({
        status: 201,
        description: 'Creada',
        type: [String]
    })
    @Get('/nomencladores/tiposComponentes')
    getTiposComponente(): string[] {
        return [
            TipoComponenteEnum.CAPACIDAD_TI,
            TipoComponenteEnum.CLIENTE,
            TipoComponenteEnum.CONSULTOR,
            TipoComponenteEnum.PROCESO,
            TipoComponenteEnum.ESTRUCTURA,
        ];
    }

    @ApiBody({
        type: CreateUnidadAnalisisDto
    })
    @ApiResponse({
        status: 201,
        description: 'Creada',
        type: CreateUnidadAnalisisDto
    })
    @Post()
    create(@Body() createUnidadAnalisisDto: CreateUnidadAnalisisDto): Promise<UnidadAnalisis> {
        return this.unidadAnalisisService.create(createUnidadAnalisisDto);
    }

    @ApiBody({
        type: UpdateUnidadAnalisisDto
    })
    @ApiResponse({
        status: 201,
        description: 'Creada',
        type: UnidadAnalisis
    })
    @Put('/:id')
    update(@Param('id') id: number, @Body() updateUnidadAnalisisDto: UpdateUnidadAnalisisDto): Promise<UnidadAnalisis> {
        return this.unidadAnalisisService.update(id, updateUnidadAnalisisDto);
    }

    @Post('/interaccion')
    addInteraccion(@Body() createInteraccionDto: CreateInteraccionDto): Promise<Interaccion> {
        return this.interaccionService.create(createInteraccionDto);
    }
}