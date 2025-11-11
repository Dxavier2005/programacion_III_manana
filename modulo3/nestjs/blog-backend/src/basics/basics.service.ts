
import { Injectable } from '@nestjs/common';

@Injectable()

export class BasicsService {
    postFunction(bodyPost: any) {
      throw new Error('Method not implemented.');
    }
    
    getMyfirstGet(): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Get Example'
         };
    }

    getConParametros(parametro: string): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Get con Parametros',
                  parametroRecibido: parametro
         };
    }

    postExample(bodyPost: any): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Post Example',
                  bodyRecibido: bodyPost
         };
    }
}



    putFunction(bodypost: object, parametro: string): object {
        return { service: 'blog-backend',
                  controller: '/basics',
                  function:'Put Example',
                  bodyRecibido: bodypost,
                  parametroRecibido: parametro
         };
    }
