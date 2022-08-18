import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ContatoComponent } from './component/contato/contato.component';
import { HomeComponent } from './component/home/home.component';
import { PlanosComponent } from './component/planos/planos.component';
import { PortifolioComponent } from './component/portifolio/portifolio.component';
import { ServicosComponent } from './component/servicos/servicos.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'cadastro', component: CadastroComponent },
  { path:'planos', component: PlanosComponent },
  { path:'portifolio', component: PortifolioComponent },
  { path:'servicos', component: ServicosComponent },
  { path:'contato', component: ContatoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
