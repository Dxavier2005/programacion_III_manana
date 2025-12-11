import { Injectable } from '@nestjs/common';
import { AnyMxRecord } from 'dns';

@Injectable()
export class BasicsService {

    getMyFirstGet(): object {
        return{
        service: 'Blog Backend',
        controller: '/basics',
        function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return{
        service: 'Blog Backend',
        controller: '/basics',
        function: 'Get Example',
        parametroRecibido: parametro
        };
    }

    postFunction(bodyPost: object): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }

    deleteFunction(parametro: string): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de put',
            parametro: parametro
        };
    }

    calculoTriangulo(body:any): object{
        const result : number = (body.base * body.altura)/2

        return{
            service: 'Blog Backend',
            controller: '/calculo-area-triangulo',
            function: 'calculo area triangulo',            
            resultado: result
        };
    }
    
    areaRectangulo(ancho:number, alto:number): object{
        const result: number = ancho*alto;
        return{
            service: 'Blog Backend',
            controller: '/calculo-area-rectangulo',
            function: 'calculo-area-rectangulo/:ancho/:alto',            
            resultado: result
        }
    }
    

}