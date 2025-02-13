import { Get, Controller, Param } from '@nestjs/common';
import { Render } from "@nest/hbs";


@Controller()
export class Hello {
  constructor() {}

  @Get('/')
  hello() {
    return "zqwtest2";
  }

	@Get('/e1231zzz')
	@Render("index")
	helloeq123123() {
		return {
			message: "Hello",
		};
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

