import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Estudio de Caso como Servicio (CSaaS)')
    .setDescription('')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync('./docs/swagger/CSaS-swagger.json', JSON.stringify(document));

  SwaggerModule.setup('api', app, document);
  
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
