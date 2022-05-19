import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CasoModule } from '../caso/caso.module';
import { UnidadAnalisis } from './entities/unidad-analisis.entity';
import { Componente } from './entities/componente.entity';
import { UnidadAnalisisController } from './controllers/unidad-analisis.controller';
import { UnidadAnalisisService } from './services/unidad-analisis.service';
import { SPaaSClient } from '../../clients/spaas/spaas.client';

@Module({
    imports: [TypeOrmModule.forFeature([UnidadAnalisis, Componente]), CasoModule, HttpModule],
    controllers: [UnidadAnalisisController],
    providers: [UnidadAnalisisService, SPaaSClient]
})
export class UnidadAnalisisModule {
    constructor(private connection: Connection) { }
}
