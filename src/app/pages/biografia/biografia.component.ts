import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFooterComponent } from "../component/user-footer/user-footer.component";
import { UserHeaderComponent } from "../component/user-header/user-header.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-biografia',
  imports: [
    CommonModule,
    UserFooterComponent,
    UserHeaderComponent,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,

],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.css'
})
export class BiografiaComponent {
}
