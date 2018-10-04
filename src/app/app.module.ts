import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FondoComponent } from './fondo/fondo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';

//instalar el firemodule
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// modulos a utilizar
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//importar servicios
import {ChatService} from '../app/providers/chat.service';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondoComponent,
    ServiciosComponent,
    MarcasComponent,
    FooterComponent,
    ChatComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
