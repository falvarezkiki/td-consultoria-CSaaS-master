import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProposicionTeorica } from "../entities/proposicion-teorica.entity";
import { Repository } from "typeorm";
import { CreateProposicionTeoricaDto } from "../dto/create-proposicion-teorica.dto";
import { ProposicionToCase } from "../dto/proposicion-to-case.dto";
import { CasoService } from "./caso.service";

@Injectable()
export class ProposicionTeoricaService {
    constructor(
        @InjectRepository(ProposicionTeorica)
        private proposicionTeoricaRepository: Repository<ProposicionTeorica>,
        private casoService: CasoService
    ) { }

    create(createProposicionDto: CreateProposicionTeoricaDto): Promise<ProposicionTeorica> {
        return this.proposicionTeoricaRepository.save(createProposicionDto);
    }

    async addToCase(proposicionToCaseDto: ProposicionToCase): Promise<boolean> {
        const caso = await this.casoService.findOne(proposicionToCaseDto.idCaso);
        const proposicionTeorica = await this.proposicionTeoricaRepository.findOne(proposicionToCaseDto.idProposicionTeorica, {
            relations: ['casos']
        });
        proposicionTeorica.casos.push(caso);
        await this.proposicionTeoricaRepository.save(proposicionTeorica);
        return true;
    }

    async removeFromCase(proposicionToCaseDto: ProposicionToCase): Promise<boolean> {
        const caso = await this.casoService.findOne(proposicionToCaseDto.idCaso);
        const proposicionTeorica = await this.proposicionTeoricaRepository.findOne(proposicionToCaseDto.idProposicionTeorica, {
            relations: ['casos']
        });
        proposicionTeorica.casos = proposicionTeorica.casos.filter(casoItem => {
            casoItem.id !== caso.id
        });
        await this.proposicionTeoricaRepository.save(proposicionTeorica);
        return true;
    }

    async remove(id: number): Promise<ProposicionTeorica> {
        const proposicionTeorica = await this.proposicionTeoricaRepository.findOne(id);
        return this.proposicionTeoricaRepository.remove(proposicionTeorica);
    }

    /*update(id: number): Promise<ProposicionTeorica>{

    }*/
}