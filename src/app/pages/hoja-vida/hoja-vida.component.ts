import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-hoja-vida',
  imports: [
    MatCard,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
  ],
  templateUrl: './hoja-vida.component.html',
  styleUrl: './hoja-vida.component.css'
})
export class HojaVidaComponent {

}
