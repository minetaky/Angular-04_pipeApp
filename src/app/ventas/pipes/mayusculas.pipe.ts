import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculasPipeVero'
})

export class MayusculasPipeVero implements PipeTransform{

    transform(valor: string, enMayusculas?: boolean ): string {
        
        // if(enMayusculas){
        //     return valor.toLocaleUpperCase();
        // }else{
        //     return valor.toLocaleLowerCase();
        // }

        return enMayusculas ? valor.toUpperCase() : valor.toLocaleLowerCase();

    }

}