import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UnidadAnalisis } from "../entities/unidad-analisis.entity";
import { Repository } from "typeorm";
import { CreateUnidadAnalisisDto } from "../dto/create-unidad-analisis.dto";
import { CasoService } from "../../caso/services/caso.service";
import { Componente } from "../entities/componente.entity";
import { UpdateUnidadAnalisisDto } from "../dto/update-unidad-analisis.dto";
import { SPaaSClient } from "../../../clients/spaas/spaas.client";
import { Observable, from, forkJoin, of } from "rxjs";
import { mergeMap, map } from "rxjs/operators";
import { UnidadAnalisisResponseDto } from "../dto/unidad-analisis-response.dto";
<<<<<<< HEAD
=======
import { TipoComponenteEnum } from "../enums/tipo-componente.enum";
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

@Injectable()
export class UnidadAnalisisService {
    constructor(
        @InjectRepository(UnidadAnalisis)
        private readonly unidadAnalisisRepository: Repository<UnidadAnalisis>,
        private readonly casoService: CasoService,
        private spaasClient: SPaaSClient
    ) { }

    findAll(idCaso: number): Promise<UnidadAnalisis[]> {
        return this.unidadAnalisisRepository.find({
            where: {
                casoIdCaso: idCaso
            }
        });
    }

<<<<<<< HEAD
    findOnePromise(id: number): Promise<UnidadAnalisis> {
        return this.unidadAnalisisRepository.findOne(id);
    }

    findOne(id: number): Observable<UnidadAnalisisResponseDto> {
        return from(this.unidadAnalisisRepository.findOne(id, {
            relations: ['componentes']
        }))
            .pipe(mergeMap(data => {
                return forkJoin({
                    unidadAnalisis: of(data),
                    componentes: this.getComponentes(data.tipo, data.componentes)
                });
            })).pipe(map(data => {
                const response = new UnidadAnalisisResponseDto();
                response.id = data['unidadAnalisis'].id;
                response.nombre = data['unidadAnalisis'].nombre;
                response.descripcion = data['unidadAnalisis'].descripcion;
                response.tipo = data['unidadAnalisis'].tipo;
                response.interacciones = data['unidadAnalisis'].interacciones;
                response.componentes = data['componentes'];
                return response;
            }));
=======
    findOne(id: number): Observable<UnidadAnalisisResponseDto> {
        return from(this.unidadAnalisisRepository.findOne(id, {
            relations: ['componentes']
        })).pipe(mergeMap(data => {
            return forkJoin({
                unidadAnalisis: of(data),
                componentes: this.getComponentes(data.tipo, data.componentes)
            });
        })).pipe(map(data => {
            const response = new UnidadAnalisisResponseDto();
            response.id = data['unidadAnalisis'].id;
            response.nombre = data['unidadAnalisis'].nombre;
            response.descripcion = data['unidadAnalisis'].descripcion;
            response.tipo = data['unidadAnalisis'].tipo;
            response.interacciones = data['unidadAnalisis'].interacciones;
            response.componentes = data['componentes'];
            return response;
        }));
    }

    findOneDb(id: number): Promise<UnidadAnalisis> {
        return this.unidadAnalisisRepository.findOne(id);
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    }

    async create(createUnidadAnalisisDto: CreateUnidadAnalisisDto) {
        const unidadAnalisis = new UnidadAnalisis();
        unidadAnalisis.nombre = createUnidadAnalisisDto.nombre;
        unidadAnalisis.descripcion = createUnidadAnalisisDto.descripcion;
        unidadAnalisis.caso = await this.casoService.findOne(createUnidadAnalisisDto.idCaso);
        unidadAnalisis.tipo = createUnidadAnalisisDto.tipo;
        if (createUnidadAnalisisDto.componentes) {
            unidadAnalisis.componentes = [];
            createUnidadAnalisisDto.componentes.forEach(item => {
                unidadAnalisis.componentes.push(new Componente({ idComponente: item.idComponente }));
            });
        }
        return this.unidadAnalisisRepository.save(unidadAnalisis);
    }

    async update(id: number, updateUnidadAnalisisDto: UpdateUnidadAnalisisDto): Promise<UnidadAnalisis> {
        const unidadAnalisis = await this.unidadAnalisisRepository.findOne(id);
        unidadAnalisis.nombre = updateUnidadAnalisisDto.nombre;
        unidadAnalisis.descripcion = updateUnidadAnalisisDto.descripcion;
        unidadAnalisis.caso = await this.casoService.findOne(updateUnidadAnalisisDto.idCaso);
        unidadAnalisis.tipo = updateUnidadAnalisisDto.tipo;
        if (updateUnidadAnalisisDto.componentes) {
            unidadAnalisis.componentes = [];
            updateUnidadAnalisisDto.componentes.forEach(item => {
                unidadAnalisis.componentes.push(new Componente({ idComponente: item.idComponente }));
            });
        }
        return this.unidadAnalisisRepository.save(unidadAnalisis);
    }

    getComponentes(tipo: string, componentes: Componente[]): Observable<any> {
        switch (tipo) {
            case TipoComponenteEnum.CAPACIDAD_TI: return this.spaasClient.getCapacidadesTi(componentes);
            case TipoComponenteEnum.PROCESO: return this.spaasClient.getProcesos(componentes);
            default: return of([]); break;
        }
    }
}