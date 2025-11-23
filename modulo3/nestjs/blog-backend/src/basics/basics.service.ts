
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
    postFunction(bodyPost: any): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Post Example',
            bodyRecibido: bodyPost
        };
    }
    
    getMyfirstGet(): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
    }

    postExample(bodyPost: any): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Post Example',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodypost: object): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Put Example',
            bodyRecibido: bodypost
        };
    }

    deleteFunction(id: string): object {
        return { 
            service: 'blog-backend',
            controller: '/basics',
            function: 'Delete Example',
            idRecibido: id
        };
    }
}
