import { Get, Controller, Param } from '@nestjs/common';


@Controller()
export class Hello {
  constructor() {}

  @Get('/')
  hello() {
    return "zqwtest2";
  }
  
  @Get('/acz2')
  hello2() {
    return "test";
  }

 @Get('/a2/:id')
  getById(@Param('id') id: string) {
    return `Received ID: ${id}`;
  }
  
  
}

