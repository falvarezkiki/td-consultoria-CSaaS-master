<<<<<<< HEAD
import { Module, HttpModule, HttpService } from '@nestjs/common';
=======
import { Module, forwardRef, HttpModule } from '@nestjs/common';
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EstudioCasoController } from './estudio-caso.controller';
import { EstudioCasoService } from './estudio-caso.service';
import { EstudioCaso } from './entities/estudio-caso.entity';
import { Consultoria } from './entities/consultoria.entity';
import { Intervencion } from './entities/intervencion.entity';
import { IaaSClient } from '../../clients/iaas/iaas.client';
<<<<<<< HEAD
import { TTaaSClientService } from '../../clients/ttaas/ttaas.client.service';
=======
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca

@Module({
    imports: [TypeOrmModule.forFeature([EstudioCaso, Consultoria, Intervencion]), HttpModule],
    controllers: [EstudioCasoController],
<<<<<<< HEAD
    providers: [EstudioCasoService, IaaSClient, TTaaSClientService],
=======
    providers: [EstudioCasoService, IaaSClient],
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    exports: [EstudioCasoService]
})
export class EstudioCasoModule {
    constructor(private connection: Connection) { }
}
