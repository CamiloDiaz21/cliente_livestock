import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EleccionComponent } from './pages/eleccion/eleccion.component';
import { RegistroComponent } from './pages/registro/registro.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'eleccion', component: EleccionComponent},
    { path: 'registro', component: RegistroComponent},
    { path: '**', redirectTo: 'login' },
  ];
