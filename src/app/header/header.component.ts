import { Component, OnInit } from '@angular/core';
import {constantesHeader} from './header.constants';
import {Logo} from './logo';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo:Logo;
  logo_address:string;
  logo_alt:string;

  direccion:string;
  direccion_googlemaps:string;
  telefonos: string;
  email:string;

  icon_ubicacion:string;
  icon_facebook:string;
  icon_instagram:string;
  icon_telefono:string;
  icon_email:string;

  constructor() {
    this.logo_address= constantesHeader.logo_address;
    this.logo_alt=constantesHeader.logo_alt;
  }
  
  ngOnInit() {
    this.logo = new Logo(this.logo_address,this.logo_alt);
    this.direccion=constantesHeader.direccion_taller;
    this.direccion_googlemaps=constantesHeader.direccion_google_taller;
    this.telefonos=constantesHeader.telefono;
    this.email=constantesHeader.email;
    this.icon_facebook=constantesHeader.icon_face;
    this.icon_instagram=constantesHeader.icon_instagram;
    this.icon_telefono=constantesHeader.icon_telefono;
    this.icon_ubicacion=constantesHeader.icon_ubicacion;
    this.icon_email=constantesHeader.icon_email;
  }

}
