import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Verónica meléndez';
  valor: number = 100;
  obj = {
    nombre: 'Verónica'
  }

  title = '04-pipesApp';

  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
