import { Injectable, HttpService } from "@nestjs/common";
import { TratamientoTemporalDto } from "./dto/tratamiento-temporal.dto";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CreateTratamientoTemporalDto } from "./dto/create-tratamiento-temporal.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TTaaSClientService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) { }

    getList(ids: number[]): Observable<Map<number, TratamientoTemporalDto>> {
        return this.httpService.get<Map<number, TratamientoTemporalDto>>(`http://${this.configService.get('TTAAS_URL')}/tratamientoTemporal?ids=${ids.join()}`)
            .pipe(map(res => res.data), catchError(error => {
                console.log(error.message);
                return of(null);
            }));
    }

    findOne(id: number): Observable<TratamientoTemporalDto> {
        return this.httpService.get<TratamientoTemporalDto>(`http://${this.configService.get('TTAAS_URL')}/tratamientoTemporal/${id}`)
            .pipe(map(res => res.data), catchError(error => {
                console.log(error.message);
                return of(null);
            }));
    }

    create(createTratamientoTemporalDto: CreateTratamientoTemporalDto): Observable<TratamientoTemporalDto> {
        return this.httpService.post<TratamientoTemporalDto>(`http://${this.configService.get('TTAAS_URL')}/tratamientoTemporal/`, createTratamientoTemporalDto)
            .pipe(map(res => res.data), catchError(error => {
                console.log(error.message);
                return of(null);
            }));
    }

    update(id: number, createTratamientoTemporalDto: CreateTratamientoTemporalDto): Observable<TratamientoTemporalDto> {
        return this.httpService.put<TratamientoTemporalDto>(`http://${this.configService.get('TTAAS_URL')}/tratamientoTemporal/${id}`, createTratamientoTemporalDto)
            .pipe(map(res => {
                return res.data;
            }), catchError(error => {
                console.log(error.message);
                return of(null);
            }));
    }

    delete(id: number): Promise<string> {
        console.log(id);
        return this.httpService.delete<string>(`http://localhost:3008/tratamientoTemporal/${id}`)
            .toPromise().then(res => res.data);
        // .pipe(map(res => {
        //     return res;
        // }), catchError(error => {
        //     console.log(error.message);
        //     return of(null);
        // }));
    }
}