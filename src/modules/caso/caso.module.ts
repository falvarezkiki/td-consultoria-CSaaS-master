import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Caso } from './entities/caso.entity';
import { Pregunta } from './entities/pregunta.entity';
import { ProposicionTeorica } from './entities/proposicion-teorica.entity';
import { CasoController } from './controllers/caso.controller';
import { CasoService } from './services/caso.service';
import { ProposicionTeoricaService } from './services/proposicion-teorica.service';
import { EstudioCasoModule } from '../estudio-caso/estudio-caso.module';

@Module({
    imports: [TypeOrmModule.forFeature([Caso, Pregunta, ProposicionTeorica]), EstudioCasoModule],
    controllers: [CasoController],
    providers: [CasoService, ProposicionTeoricaService],
    exports: [CasoService]
})
export class CasoModule {
    constructor(private connection: Connection) { }
}
