import { Injectable, HttpService } from "@nestjs/common";
import { map } from "rxjs/operators";
import { IntervencionResponseDto } from "./dto/intervencion-response.dto";
import { Observable } from "rxjs";
import { Intervencion } from "../../modules/estudio-caso/entities/intervencion.entity";

@Injectable()
export class IaaSClient{
    constructor(
        private httpService: HttpService,
        private configService: HttpService
    ){}

    getIntervenciones(intervenciones: Intervencion[]): Observable<IntervencionResponseDto[]> {
        const ids = [];
        if(intervenciones) {
            intervenciones.forEach(item => {
                ids.push(item.idIntervencion);
            })
        }
        return this.httpService.get<IntervencionResponseDto[]>(
<<<<<<< HEAD
            `http://${this.configService.get('ITAAS_URL')}/intervenciones?ids=${ids.join()}`)
=======
            `http://localhost:3001/intervencion/findByIdList?ids=${ids.join()}`)
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
            .pipe(map(res => res.data));
    }

    getIntervencion(id: number): Observable<IntervencionResponseDto> {
        return this.httpService.get<IntervencionResponseDto>(`http://${this.configService.get('ITAAS_URL')}/intervenciones/${id}`)
            .pipe(map(res => res.data));
    }

    editIntervencionDate() {
        
    }
}