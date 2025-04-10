import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,

  ],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}
    hidePassword=true;

    inicarsesion(){
      this.router.navigate(['/login'])
    }

}
