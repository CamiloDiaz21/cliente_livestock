import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-header2',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './user-header2.component.html',
  styleUrls: ['./user-header2.component.css'] // O .scss si usas SCSS
})
export class UserHeader2Component {}
