import { Module } from '@nestjs/common';
import { Hello } from './hello.ts';
import { Home } from './home.ts';


@Module({ 
controllers: [Hello, Home] 
})
export class AppModule {}
