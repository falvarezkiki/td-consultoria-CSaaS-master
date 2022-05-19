import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Caso } from "../entities/caso.entity";
import { Repository } from "typeorm";
import { CreateCasoDto } from "../dto/create-caso.dto";
import { EstudioCasoService } from "../../estudio-caso/estudio-caso.service";
import { Pregunta } from "../entities/pregunta.entity";
import { UpdateCasoDto } from "../dto/update-caso.dto";

@Injectable()
export class CasoService {
    constructor(
        @InjectRepository(Caso)
        private readonly casoRepository: Repository<Caso>,
        private estudioCasoService: EstudioCasoService
    ) { }

    findOne(idCaso: number): Promise<Caso> {
        return this.casoRepository.findOne(idCaso, {
            relations: ['preguntas', 'proposicionesTeoricas']
        });
    }

    findAllByEstudioCaso(id: number): Promise<Caso[]> {
        return this.casoRepository.find({
            where: {
                estudioCasoIdEstudioCaso: id
            }
        });
    }

    async create(createCasoDto: CreateCasoDto): Promise<Caso> {
        const caso = new Caso();
        caso.nombre = createCasoDto.nombre;
        caso.descripcion = createCasoDto.descripcion;
<<<<<<< HEAD
        caso.estudioCaso = await this.estudioCasoService.findOnePromise(createCasoDto.idEstudioCaso);
        if(createCasoDto.preguntas) {
=======
        caso.estudioCaso = await this.estudioCasoService.findOneDb(createCasoDto.idEstudioCaso);
        if (createCasoDto.preguntas) {
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
            caso.preguntas = [];
            createCasoDto.preguntas.forEach(item => {
                caso.preguntas.push(new Pregunta({ pregunta: item }));
            });
        }
        return this.casoRepository.save(caso);
    }

    async update(id: number, updateCasoDto: UpdateCasoDto): Promise<Caso> {
        const caso = await this.casoRepository.findOne(id);
        caso.nombre = updateCasoDto.nombre;
        caso.descripcion = updateCasoDto.descripcion;
        if (updateCasoDto.preguntas) {
            caso.preguntas = [];
            updateCasoDto.preguntas.forEach(item => {
                caso.preguntas.push(new Pregunta({ pregunta: item }));
            });
        }
        return this.casoRepository.save(caso);
    }
}