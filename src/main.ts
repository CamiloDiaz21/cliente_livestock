import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/pages/login/login.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RegistroComponent } from './app/pages/registro/registro.component';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { InicioComponent } from './app/pages/inicio/inicio.component';
import { UserHeaderComponent } from './app/pages/component/user-header/user-header.component';



bootstrapApplication(AppComponent,{
  providers:[
      provideRouter([
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'registro', component: RegistroComponent},
          { path: 'inicio', component: InicioComponent},
          { path: 'user-header', component: UserHeaderComponent}

      ]),
      provideAnimations(),
      provideHttpClient()
    ]
  }).catch(err => console.error(err));

