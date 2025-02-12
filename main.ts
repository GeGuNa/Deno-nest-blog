import { NestFactory } from '@nestjs/core';
import { Get, Module, Controller } from '@nestjs/common';
import '@nestjs/platform-express';
import { AppModule } from './module.ts';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Server is running on http://localhost:3000');
}

bootstrap();
