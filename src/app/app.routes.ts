import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { VerificacionCodigoComponent } from './pages/verificacion-codigo/verificacion-codigo.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HojaVidaComponent } from './pages/hoja-vida/hoja-vida.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { HacerPublicacionComponent } from './pages/hacer-publicacion/hacer-publicacion.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'recover-password', component: RecoverPasswordComponent},
    { path:'verificacion-codigo', component: VerificacionCodigoComponent },
    { path: 'new-password', component: NewPasswordComponent},
    { path: 'inicio', component: InicioComponent, data: { animation: 'InicioPage' }},
    { path: 'perfil', component: PerfilComponent},
    { path: 'publicaciones', component: PublicacionesComponent, data: { animation: 'PublicacionesPage' }},
    { path: 'hoja-vida', component: HojaVidaComponent},
    { path: 'editar-perfil', component: EditarPerfilComponent},
    { path: 'publicar', component: HacerPublicacionComponent},
    { path: '**', redirectTo: 'login' },
  ];
