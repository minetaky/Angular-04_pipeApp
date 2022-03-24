import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
nombre: string = 'Luis';
genero: string = 'M';
invitacionMap = {
  'F': 'invitarla',
  'M': 'invitarlo'
}

//i18nPlural
clientes = [
  'Ana',
  'Saúl',
  'Tere',
  'Gerardo',
  'Toño',
  'Matilda'
];

clientesVacios: string[] = [];

clientesMapa = {
  '=0': 'No tenemos ningún cliente esperando.',
  '=1': 'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando'

}

cambiarCliente():void{
  if (this.nombre === 'Gerardo') {
    this.nombre = 'Vero';
    this.genero = 'F';
  } else {
    this.nombre = 'Gerardo';
    this.genero = 'M';
  }

}

borrarCliente(): void{
this.clientes = this.clientes.pop() != 'undefined' ? this.clientes : this.clientesVacios;
}

//keyvalue Pipe
persona = {
  nombre: 'Vero',
  edad: 37,
  direccion: 'CDMX'
}

//Json Pipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Mujer Maravilla',
    vuela: true
  }
];


//Async Pipe

miObservable = interval(1000);

valorPromesa = new Promise( ( resolve, reject  ) => {

  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 3500);

} );

}
