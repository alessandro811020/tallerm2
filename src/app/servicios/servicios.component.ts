import { Component, OnInit } from '@angular/core';
import {constantesServicios} from './servicios.constantes';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  direccion_suspenciones: string;
  direccion_electricidad: string;
  direccion_capa_pintura: string;
  direccion_mecanica_general: string;
  direccion_personalizacion: string;
  direccion_itv: string; 
  direccion_lavado: string;
  direccion_moto_sustitucion: string; 
  direccion_recogida_entrega: string;
  texto_suspenciones: string;
  texto_electricidad: string; 
  texto_capa_pintura: string;
  texto_mecanica_general: string;
  texto_personalizacion: string;
  texto_itv: string;
  texto_lavado: string;
  texto_moto_sustitucion: string;
  texto_recogida_entrega: string;

  constructor() { }

  ngOnInit() {
    this.direccion_suspenciones=constantesServicios.direccion_suspenciones;
    this.direccion_electricidad=constantesServicios.direccion_electricidad;
    this.direccion_capa_pintura=constantesServicios.direccion_capa_pintura;
    this.direccion_mecanica_general=constantesServicios.direccion_mecanica_general;
    this.direccion_personalizacion = constantesServicios.direccion_personalizacion;
    this.direccion_itv=constantesServicios.direccion_itv;
    this.direccion_lavado=constantesServicios.direccion_lavado;
    this.direccion_moto_sustitucion=constantesServicios.direccion_moto_sustitucion;
    this.direccion_recogida_entrega=constantesServicios.direccion_recogida_entrega;

    this.texto_capa_pintura= constantesServicios.texto_capa_pintura;
    this.texto_suspenciones=constantesServicios.texto_suspenciones;
    this.texto_electricidad=constantesServicios.texto_electricidad;
    this.texto_mecanica_general=constantesServicios.texto_mecanica_general;
    this.texto_personalizacion = constantesServicios.texto_personalizacion;
    this.texto_itv=constantesServicios.texto_itv;
    this.texto_lavado=constantesServicios.texto_lavado;
    this.texto_moto_sustitucion=constantesServicios.texto_moto_sustitucion;
    this.texto_recogida_entrega=constantesServicios.texto_recogida_entrega;
  }

}
