import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLowerCase: string = 'veronica';
  nombreUppercase: string = 'VERONICA';
  nombreCompleto: string = 'veroNICA meLENndez';
  
  fecha: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
