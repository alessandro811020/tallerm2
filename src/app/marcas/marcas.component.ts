import { Component, OnInit } from '@angular/core';
import {direccionesMarcas} from './marcas.constantes';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  aprilia:string;
  marcas:any;

  constructor() { }

  ngOnInit() {
    this.marcas={
      aprilia:direccionesMarcas.APRILIA,
      bimota:direccionesMarcas.BIMOTA,
      derbi: direccionesMarcas.DERBI,
      beta:direccionesMarcas.BETA,
      gasgas:direccionesMarcas.GASGAS,
      honda: direccionesMarcas.HONDA,
      harley: direccionesMarcas.HARLEY,
      norton:direccionesMarcas.NORTON,
      ktm:direccionesMarcas.KTM,
      kawasaki:direccionesMarcas.KAWASAKI,
      peugeot:direccionesMarcas.PEUGEOT,
      suzuki:direccionesMarcas.SUZUKI,
      bmw:direccionesMarcas.BMW,
      yamaha: direccionesMarcas.YAMAHA,
      triumph: direccionesMarcas.TRIUMPH,
      ducati: direccionesMarcas.DUCATI,
      daelin:direccionesMarcas.DAELIM,
      gilera:direccionesMarcas.GILERA,
      kimko:direccionesMarcas.KIMKO,
      piaggio:direccionesMarcas.PIAGGIO,
      sherco:direccionesMarcas.SHERCO,
      victory: direccionesMarcas.VICTORY,
      sym: direccionesMarcas.SYM
    }
  }

}
