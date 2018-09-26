import { Component, OnInit } from '@angular/core';
import {constantesFondo} from './fondo.constantes';

@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})
export class FondoComponent implements OnInit {

  direccion_fondo:string;

  constructor() { }

  ngOnInit() {
    this.direccion_fondo=constantesFondo.direccion_fondo;
  }

}
