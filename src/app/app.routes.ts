import { Routes } from '@angular/router';
import path from 'path';
import { PortabilidadeComponent } from './components/portabilidade/portabilidade.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'Portal/Cliente',component: ClienteComponent},
  {path:'Portal/Portabilidade',component: PortabilidadeComponent},
];
