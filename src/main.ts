import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Componente raíz (asegúrate de que este componente exista)
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Asegúrate de que las rutas estén importadas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
