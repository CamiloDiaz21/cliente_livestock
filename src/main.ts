import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/pages/login/login.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RegistroComponent } from './app/pages/registro/registro.component';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { RecoverPasswordComponent } from './app/pages/recover-password/recover-password.component';
import { VerificacionCodigoComponent } from './app/pages/verificacion-codigo/verificacion-codigo.component';
import { NewPasswordComponent } from './app/pages/new-password/new-password.component';
import { InicioComponent } from './app/pages/inicio/inicio.component';
import { UserHeaderComponent } from './app/pages/component/user-header/user-header.component';
import { PublicacionesComponent } from './app/pages/publicaciones/publicaciones.component';
import { PerfilComponent } from './app/pages/perfil/perfil.component';
import { HojaVidaComponent } from './app/pages/hoja-vida/hoja-vida.component';
import { EditarPerfilComponent } from './app/pages/editar-perfil/editar-perfil.component';
import { HacerPublicacionComponent } from './app/pages/hacer-publicacion/hacer-publicacion.component';



bootstrapApplication(AppComponent,{
  providers:[
      provideRouter([
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'registro', component: RegistroComponent},
          { path: 'inicio', component: InicioComponent},
          { path: 'recover-password', component: RecoverPasswordComponent},
          { path:'verificacion-codigo', component: VerificacionCodigoComponent },
          { path: 'new-password', component: NewPasswordComponent},
          { path: 'user-header', component: UserHeaderComponent},
          { path: 'publicaciones', component: PublicacionesComponent},
          { path: 'hoja-vida', component: HojaVidaComponent},
          { path: 'perfil', component: PerfilComponent},
          { path: 'editar-perfil', component: EditarPerfilComponent},
          { path: 'publicar', component: HacerPublicacionComponent},

      ]),
      provideAnimations(),
      provideHttpClient()
    ]
  }).catch(err => console.error(err));

