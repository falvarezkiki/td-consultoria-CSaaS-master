import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { EstudioCaso } from './modules/estudio-caso/entities/estudio-caso.entity';
import { Consultoria } from './modules/estudio-caso/entities/consultoria.entity';
import { Caso } from './modules/caso/entities/caso.entity';
import { Pregunta } from './modules/caso/entities/pregunta.entity';
import { ProposicionTeorica } from './modules/caso/entities/proposicion-teorica.entity';
import { EstudioCasoModule } from './modules/estudio-caso/estudio-caso.module';
import { CasoModule } from './modules/caso/caso.module';
import { Intervencion } from './modules/estudio-caso/entities/intervencion.entity';
import { UnidadAnalisis } from './modules/unidad-analisis/entities/unidad-analisis.entity';
import { Interaccion } from './modules/unidad-analisis/entities/interaccion.entity';
import { Componente } from './modules/unidad-analisis/entities/componente.entity';
import { Evidencia } from './modules/unidad-analisis/entities/evidencia.entity';
import { UnidadAnalisisModule } from './modules/unidad-analisis/unidad-analisis.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get<string>('DATABASE_HOST'),
                port: parseInt(configService.get<string>('DATABASE_PORT')) || 3306,
                username: configService.get<string>('DATABASE_USER'),
                password: '',
                database: configService.get<string>('DATABASE_DB'),
                entities: [
                    EstudioCaso,
                    Consultoria,
                    Intervencion,
                    Caso,
                    Pregunta,
                    ProposicionTeorica,
                    UnidadAnalisis,
                    Componente,
                ],
                synchronize: true
            }),
<<<<<<< HEAD
            inject: [ConfigService]
        }),
        EstudioCasoModule,
        CasoModule,
        UnidadAnalisisModule,
        HttpModule
=======
            EstudioCasoModule,
            CasoModule,
            UnidadAnalisisModule,
            HttpModule
>>>>>>> c15c30d4a56597b1ab41a95bb4e0cff903d1bdca
    ]
})
export class AppModule {
    constructor(private connection: Connection) { }
}
