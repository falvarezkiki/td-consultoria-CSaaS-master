import { Controller, Get, Param, Post, Body, Query, Put } from "@nestjs/common";
import { EstudioCaso } from "./entities/estudio-caso.entity";
import { EstudioCasoService } from "./estudio-caso.service";
import { CreateEstudioCasoDto } from "./dto/create-estudio-caso.dto";
import { UpdateEstudioCasoDto } from "./dto/update-estudio-caso.dto";
import { Observable } from "rxjs";
import { EstudioCasoResponseDto } from "./dto/estudio-caso-response.dto";
<<<<<<< HEAD
import { TTaaSClientService } from "../../clients/ttaas/ttaas.client.service";
=======
import { ApiTags, ApiResponse, ApiBody } from "@nestjs/swagger";
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

@ApiTags('Estudio de Caso')
@Controller('estudioCaso')
export class EstudioCasoController {
    constructor(
        private readonly estudioCasoService: EstudioCasoService,
<<<<<<< HEAD
        private iaasClient: IaaSClient,
        private ttaasClient: TTaaSClientService
    ) { }

    @Get()
    getAllByConsultoria(@Query('idConsultoria') idConsultoria: number): Promise<EstudioCaso[]> {
        return this.estudioCasoService.findAllByConsultoria(idConsultoria);
    }

    @Get('/:id')
    getOne(@Param('id') id: number): Observable<EstudioCasoResponseDto> {
       return this.estudioCasoService.findOne(id);
=======
    ) { }

    @ApiResponse({
        status: 200,
        description: 'Pedir Estudios de Caso por Consultoria',
        type: [EstudioCaso]
    })
    @Get()
    getAll(@Query('idConsultoria') idConsultoria: number): Promise<EstudioCaso[]> {
        return this.estudioCasoService.findAll(idConsultoria);
    }

    @ApiResponse({
        status: 200,
        description: 'Pedir Estudios de Caso por Id',
        type: EstudioCaso
    })
    @Get('/:id')
    getOne(@Param('id') id: number): Observable<EstudioCasoResponseDto> {
        return this.estudioCasoService.findOne(id);
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    }

    @ApiBody({
        type: CreateEstudioCasoDto
    })
    @ApiResponse({
        status: 201,
        description: 'Insertar Estudio de Caso',
        type: EstudioCaso
    })
    @Post()
    create(@Body() createEstudioCaso: CreateEstudioCasoDto): Promise<EstudioCaso> {
        return this.estudioCasoService.create(createEstudioCaso);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() updateEstudioCasoDto: UpdateEstudioCasoDto): Promise<EstudioCaso> {
        return this.estudioCasoService.update(id, updateEstudioCasoDto);
    }
}