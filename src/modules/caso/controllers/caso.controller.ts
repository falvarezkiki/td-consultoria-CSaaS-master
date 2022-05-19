import { Controller, Get, Query, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { CasoService } from "../services/caso.service";
import { Caso } from "../entities/caso.entity";
import { CreateCasoDto } from "../dto/create-caso.dto";
import { ProposicionTeoricaService } from "../services/proposicion-teorica.service";
import { CreateProposicionTeoricaDto } from "../dto/create-proposicion-teorica.dto";
import { ProposicionTeorica } from "../entities/proposicion-teorica.entity";
import { UpdateCasoDto } from "../dto/update-caso.dto";
import { ProposicionToCase } from "../dto/proposicion-to-case.dto";
import { ApiTags, ApiResponse, ApiBody } from "@nestjs/swagger";

@ApiTags('Caso')
@Controller('caso')
export class CasoController {
    constructor(
        private casoService: CasoService,
        private proposicionTeoricaService: ProposicionTeoricaService
    ) { }

<<<<<<< HEAD
    @Get()
    getAllByEstudioCaso(@Query('idEstudioCaso') idEstudioCaso: number): Promise<Caso[]> {
=======
    @ApiResponse({
        status: 200,
        description: 'Pedir Casos por Estudio de Caso',
        type: [Caso]
    })
    @Get()
    getAllByEstudioCaso(@Query('id') idEstudioCaso: number): Promise<Caso[]> {
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
        return this.casoService.findAllByEstudioCaso(idEstudioCaso);
    }

    @ApiResponse({
        status: 200,
        description: 'Pedir Caso por Id',
        type: Caso
    })
    @Get('/:id')
    getOne(@Param('id') id: number): Promise<Caso> {
        return this.casoService.findOne(id);
    }


    @ApiBody({
        type: CreateCasoDto
    })
    @ApiResponse({
        status: 201,
        description: 'Insertar Estudio de Caso',
        type: Caso
    })
    @Post()
    create(@Body() createCasoDto: CreateCasoDto): Promise<Caso> {
        return this.casoService.create(createCasoDto);
    }

    @Put('/:id')
    update(@Param('id') id: number, updateCasoDto: UpdateCasoDto): Promise<Caso> {
        return this.casoService.update(id, updateCasoDto);
    }

    @Post('/proposicionTeorica')
    addProposicionTeorica(@Body() createProposicionTeoricaDto: CreateProposicionTeoricaDto): Promise<ProposicionTeorica> {
        return this.proposicionTeoricaService.create(createProposicionTeoricaDto);
    }

    @Delete('/proposicionTeorica/:id')
    removeProposicionTeorica(@Param('id') id: number): Promise<ProposicionTeorica> {
        return this.proposicionTeoricaService.remove(id);
    }

    @ApiBody({
        type: CreateCasoDto
    })
    @ApiResponse({
        status: 201,
        description: 'Insertar Estudio de Caso'
    })
    @Post('/addProposicionToCaso')
    addToCase(@Body() proposicionToCase: ProposicionToCase) {
        return this.proposicionTeoricaService.addToCase(proposicionToCase);
    }

    @Post('/removeProposicionFromCaso')
    removeFromCase(@Body() proposicionToCase: ProposicionToCase) {
        return this.proposicionTeoricaService.removeFromCase(proposicionToCase);
    }
}   