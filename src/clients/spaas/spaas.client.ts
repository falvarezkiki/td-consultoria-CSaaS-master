import { Injectable, HttpService } from "@nestjs/common";
import { ProcesoResponseDto } from "./dto/proceso-response.dto";
import { Observable, of, forkJoin } from "rxjs";
import { map, catchError, mergeMap } from "rxjs/operators";
import { CapacidadTiResponseDto } from "./dto/capacidad-ti-response.dto";
import { Componente } from '../../modules/unidad-analisis/entities/componente.entity';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SPaaSClient {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) { }

    getProcesos(componentes: Componente[]): Observable<ProcesoResponseDto[]> {
        const ids = [];
        if (componentes) {
            componentes.forEach(item => {
                ids.push(item.idComponente);
            })
        }
        return this.httpService.get<ProcesoResponseDto[]>(`http://${this.configService.get('SPAAS_URL')}/procesos/findByIdList?ids=${ids.join()}`)
            .pipe(map(res => res.data), catchError(error => {
                console.log(error.message);
                return of([]);
            }));
    }

    getCapacidadesTi(componentes: Componente[]): Observable<CapacidadTiResponseDto[]> {
        const ids = [];
        if (componentes) {
            componentes.forEach(item => {
                ids.push(item.idComponente);
            })
        }
        return this.httpService.get<CapacidadTiResponseDto[]>(`http://localhost:3002/capacidadTi/findByIdList?ids=${ids.join()}`)
            .pipe(map(res => res.data), catchError(error => {
                console.log(error.message);
                return of([]);
            }));
    }

    /*async getVistaEstructura(vistaEstructura: VistaEstructuraDto): Promise<VistaEstructuraDto> {
        if (vistaEstructura) {
            const response = new VistaEstructuraDto();
            if (vistaEstructura.idEstructura) {
                response.estructuraOrganizacional = await this.httpService.get<EstructuraOrganizacionalDto>(`http://localhost:3002/estructuras/findById/${vistaEstructura.idEstructura}`).toPromise().then(res => res.data);
            }
            if (vistaEstructura.unidadesOrganizacionales) {
                const ids = [];
                vistaEstructura.unidadesOrganizacionales.forEach(item => {
                    ids.push(item.idUnidadOrganizacional);
                })
                response.unidadesOrganizacionales = await this.httpService.get<UnidadOrganizacionalDto[]>(`http://localhost:3002/unidadesOrganizacionales/findByIdList?ids=${ids.join()}`).toPromise().then(res => res.data);
            }
            return response;
        }
        return null;
    }*/
}