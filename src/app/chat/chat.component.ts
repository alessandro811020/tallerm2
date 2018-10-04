import { Component, OnInit } from '@angular/core';
//cargar el servicio qeu se va a utilizar
import {ChatService} from '../providers/chat.service';

//inyectar firestore en el appcomponent
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string="";
  elemento:any;
  nombre:string;
  idUsuario:number;


  chats: Observable<any[]>;
  constructor(public _cs:ChatService) {
    this._cs.cargarMensajes().subscribe(()=>{

      setTimeout(()=>{
        this.elemento.scrollTop=this.elemento.scrollHeight;
      },20)
    });//para que mueva el foco hascia el final cuando reciba los mensajes
    // this.chats = db.collection('chats').valueChanges();
    
  }
  
  ngOnInit() {
    this.idUsuario=Math.floor(Math.random() * (1000000 - 0)) + 0;;
    // console.log(this.idUsuario);
    this.elemento=document.getElementById('app-mensajes');
    this.nombre="";
    //debemos inicializar un token de identidad de usuario
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if(this.mensaje.length!==0&&this.nombre.length!==0){
      this._cs.agregarMensaje(this.mensaje,this.nombre,this.idUsuario)//recibe del servicio el metodo agregar
                              .then(()=>this.mensaje="")
                              .catch((err)=>console.error('Error al enviar',err))                            
    }else{

      return;
    }
  }

}
