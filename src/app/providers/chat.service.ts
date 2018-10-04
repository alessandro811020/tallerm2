import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mensaje} from '../interfaces/mensaje.interface';
import {CONSTANTES} from '../app.constants';
// import {Http} from '@angular/http';
// import { JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[]=[];

  // items: Observable<Mensaje[]>;
  constructor(private afs: AngularFirestore) {
    
  }
  
  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc').limit(5));
    
    return this.itemsCollection.valueChanges()
                            .map((mensajes:Mensaje[])=>{
                              console.log(mensajes);
                              // this.chats=mensajes;//aqui se realiza el orden
                              this.chats=[];
                              for (let mensaje of mensajes){
                                this.chats.unshift(mensaje);
                              }

                              return this.chats;
                            })
  }


  agregarMensaje(texto:string,usuario:string, idUsuario:number){    

    let mensaje:Mensaje={
      nombre:usuario,
      mensaje:texto,
      fecha:new Date().getTime(),
      idUsuario:idUsuario
      // token: this.token
    }

    return this.itemsCollection.add(mensaje);//asi se manda el mensaje
  }

  public logout(){
    console.log('Se ha clickeado el logout');
    this.itemsCollection = this.afs.collection<Mensaje>('chats');


    this.itemsCollection.snapshotChanges()
  }

}
