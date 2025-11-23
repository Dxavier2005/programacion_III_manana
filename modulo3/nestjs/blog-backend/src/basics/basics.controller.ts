import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}
    @Get()
    getMyFirstGet(): object {
        return this.basicsService.getMyfirstGet();
    }
    @Get(':parametro')
    getConParametros(@Param('parametro') parametro: string) {
        return this.basicsService.getConParametros(parametro);
    }

    @Post()
    postFunction(@Body() bodyPost: any) {
        return this.basicsService.postFunction(bodyPost);
    }

    @Put(':id')
    update(@Body() bodypost: object) {
        return this.basicsService.putFunction(bodypost);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.basicsService.deleteFunction(id);
    }
}    