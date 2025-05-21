import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { verticalSlideAnimation } from './route-animations.ts/route-animations.ts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Permite que las rutas carguen los componentes correctos
  template: `<router-outlet></router-outlet>`, // Aquí se renderizan los componentes según la ruta
  animations: [verticalSlideAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}



