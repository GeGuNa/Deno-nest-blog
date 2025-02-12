import { Get, Controller } from '@nestjs/common';


@Controller()
export class Home {
  constructor() {}

  @Get('/a23')
  hello() {
    return "zqwtest2";
  }
  
  @Get('/a443')
  hello2() {
    return "test";
  }
}

