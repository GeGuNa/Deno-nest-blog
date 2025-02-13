import { NestFactory } from '@nestjs/core';
import { setBaseViewsDir } from "@nest/hbs";
import { Get, Module, Controller } from '@nestjs/common';
import '@nestjs/platform-express';
import { AppModule } from './module.ts';
import { join } from 'node:path';
const __folder = new URL('', import.meta.url).pathname;



async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	
	app.useStaticAssets(join(__folder, '..', 'public'), {
		prefix: '/public/', 
	});
  
  
	setBaseViewsDir("views/");
	
	
	await app.listen(3000);
	console.log('Server is running on http://localhost:3000');
}

bootstrap();
