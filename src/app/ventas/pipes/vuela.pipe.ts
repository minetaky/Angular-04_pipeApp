import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuelaPipeVero'
})
export class VuelaPipeVero implements PipeTransform{
    transform(valor: boolean): string {
        return valor ? 'sí vuela': 'no vuela';
    }
}



