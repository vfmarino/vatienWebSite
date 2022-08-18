import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu/menu.component';
import { HeaderComponent } from './component/header/header.component';
import { PlanosComponent } from './component/planos/planos.component';
import { ServicosComponent } from './component/servicos/servicos.component';
import { PortifolioComponent } from './component/portifolio/portifolio.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ContatoComponent } from './component/contato/contato.component';
import { MinibarComponent } from './component/minibar/minibar.component';
import { ImgcartoonComponent } from './component/imgcartoon/imgcartoon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    PlanosComponent,
    ServicosComponent,
    PortifolioComponent,
    CadastroComponent,
    ContatoComponent,
    MinibarComponent,
    ImgcartoonComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
