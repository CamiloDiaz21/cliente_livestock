import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EleccionComponent } from './pages/eleccion/eleccion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { VerificacionCodigoComponent } from './pages/verificacion-codigo/verificacion-codigo.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'eleccion', component: EleccionComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'recover-password', component: RecoverPasswordComponent},
    { path:'verificacion-codigo', component: VerificacionCodigoComponent },
    { path: '**', redirectTo: 'login' },
  ];
