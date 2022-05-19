import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EstudioCaso } from "./entities/estudio-caso.entity";
import { Repository, getRepository } from "typeorm";
import { CreateEstudioCasoDto } from "./dto/create-estudio-caso.dto";
import { Consultoria } from "./entities/consultoria.entity";
import { Intervencion } from "./entities/intervencion.entity";
<<<<<<< HEAD
import { UpdateEstudioCasoDto } from "./dto/update-estudio-caso.dto";
import { TTaaSClientService } from "../../clients/ttaas/ttaas.client.service";
import { EstudioCasoResponseDto } from "./dto/estudio-caso-response.dto";
import { Observable, from, forkJoin, of } from "rxjs";
import { mergeMap, map } from "rxjs/operators";
import { IaaSClient } from "../../clients/iaas/iaas.client";
=======
//import { TratamientoTemporal } from "../../clients/tratamiento-temporal/tratamiento-temporal.entity";
import { UpdateEstudioCasoDto } from "./dto/update-estudio-caso.dto";
import { IaaSClient } from "../../clients/iaas/iaas.client";
import { Observable, from, forkJoin, of } from "rxjs";
import { mergeMap, map } from "rxjs/operators";
import { EstudioCasoResponseDto } from "./dto/estudio-caso-response.dto";
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

@Injectable()
export class EstudioCasoService {
    constructor(
        @InjectRepository(EstudioCaso)
        private readonly estudioCasoRepository: Repository<EstudioCaso>,
<<<<<<< HEAD
        private readonly iaasClient: IaaSClient,
        private readonly ttaasClientService: TTaaSClientService
=======
        private iaasClient: IaaSClient
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    ) { }

    async findAll(idConsultoria: number): Promise<EstudioCaso[]> {
        return await this.estudioCasoRepository
            .createQueryBuilder("estudio_caso")
            .innerJoin("estudio_caso.consultorias", "consultoria", "consultoria.idConsultoria = :idConsultoria", { idConsultoria: idConsultoria })
            .getMany();
    }

    findOne(id: number): Observable<EstudioCasoResponseDto> {
        return from(this.estudioCasoRepository.findOne(id, { relations: ['consultorias', 'casos', 'intervenciones'] }))
            .pipe(mergeMap(data => {
                return forkJoin({
                    estudioCaso: of(data),
<<<<<<< HEAD
                    intervenciones: this.iaasClient.getIntervenciones(data.intervenciones),
                    tratamientoTemporal: this.ttaasClientService.findOne(data.idTratamientoTemporal)
=======
                    intervenciones: this.iaasClient.getIntervenciones(data.intervenciones)
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
                });
            })).pipe(map(data => {
                const response = new EstudioCasoResponseDto();
                response.id = data['estudioCaso'].id;
                response.nombre = data['estudioCaso'].nombre;
<<<<<<< HEAD
                response.tratamientoTemporal = data['tratamientoTemporal'];
                response.casos = data['estudioCaso'].casos;
                response.intervenciones = data['intervenciones'];
=======
                response.casos = data['estudioCaso'].casos;
                response.intervenciones = data['intervenciones'];
                //response.tratamientoTemporal = data['estudioCaso'].tratamientoTemporal;
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
                return response
            }));
    }

<<<<<<< HEAD
    findOnePromise(id: number): Promise<EstudioCaso> {
        return this.estudioCasoRepository.findOne(id, { relations: ['consultorias', 'casos', 'intervenciones'] });
=======
    findOneDb(id): Promise<EstudioCaso> {
        return this.estudioCasoRepository.findOne(id);
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    }

    async create(createEstudioCasoDto: CreateEstudioCasoDto): Promise<EstudioCaso> {
        try {
            const estudioCaso = new EstudioCaso();
            estudioCaso.nombre = createEstudioCasoDto.nombre;
            if (createEstudioCasoDto.consultorias) {
                estudioCaso.consultorias = [];
                createEstudioCasoDto.consultorias.forEach(item => {
                    estudioCaso.consultorias.push(new Consultoria({ idConsultoria: item }))
                });
            }
            if (createEstudioCasoDto.intervenciones) {
                estudioCaso.intervenciones = [];
                createEstudioCasoDto.intervenciones.forEach(item => {
                    estudioCaso.intervenciones.push(new Intervencion({ idIntervencion: item }));
                });
            }
<<<<<<< HEAD
            if (createEstudioCasoDto.tratamientoTemporal) {
                const tratamientoTemporal = await this.ttaasClientService.create(createEstudioCasoDto.tratamientoTemporal).toPromise();
                estudioCaso.idTratamientoTemporal = tratamientoTemporal.id;
            }
=======
            /*if (createEstudioCasoDto.tratamientoTemporal) {
                estudioCaso.tratamientoTemporal = new TratamientoTemporal(createEstudioCasoDto.tratamientoTemporal);
            }*/
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
            return this.estudioCasoRepository.save(estudioCaso);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e.message
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: number, updateEstudioCaso: UpdateEstudioCasoDto): Promise<EstudioCaso> {
        try {
            const estudioCaso = await this.estudioCasoRepository.findOne(id);
            estudioCaso.nombre = updateEstudioCaso.nombre;
            if (updateEstudioCaso.consultorias) {
                estudioCaso.consultorias = [];
                updateEstudioCaso.consultorias.forEach(item => {
                    estudioCaso.consultorias.push(new Consultoria({ idConsultoria: item }))
                });
            }
            if (updateEstudioCaso.intervenciones) {
                estudioCaso.intervenciones = [];
                updateEstudioCaso.intervenciones.forEach(item => {
                    estudioCaso.intervenciones.push(new Intervencion({ idIntervencion: item }));
                });
            }
<<<<<<< HEAD
            if (updateEstudioCaso.tratamientoTemporal) {
                const tratamientoTemporal = await this.ttaasClientService.create(updateEstudioCaso.tratamientoTemporal).toPromise();
                estudioCaso.idTratamientoTemporal = tratamientoTemporal.id;
            }
=======
            /*if (updateEstudioCaso.tratamientoTemporal) {
                estudioCaso.tratamientoTemporal = new TratamientoTemporal(updateEstudioCaso.tratamientoTemporal);
            }*/
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
            return this.estudioCasoRepository.save(estudioCaso);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: e.message
            }, HttpStatus.BAD_REQUEST);
        }
    }
}