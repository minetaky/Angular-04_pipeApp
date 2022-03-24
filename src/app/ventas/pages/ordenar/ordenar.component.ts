import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  cambiar: boolean = false;

  ordenarPor: string = '';


   heroe: Heroe[] = [{
     nombre: 'Superman',
     vuela: true,
     color: Color.azul
   },
   {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
   nombre: 'Robin',
   vuela: false,
   color: Color.verde
 },
 {
  nombre: 'Daredevil',
  vuela: false,
  color: Color.rojo
},
{
 nombre: 'Linterna verde',
 vuela: true,
 color: Color.verde
}]


  cambiarValor():void{
    this.cambiar = !this.cambiar;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }

}
