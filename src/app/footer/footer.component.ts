import { Component, OnInit } from '@angular/core';
import {constantesFooter} from './footer.constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  textoBase:string;

  constructor() { }

  ngOnInit() {
    this.textoBase=constantesFooter.BASE;

  }

}
