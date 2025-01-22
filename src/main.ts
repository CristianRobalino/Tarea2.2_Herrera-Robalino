import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { TropicalComponent } from './app/tropical/tropical.component';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))  // Asegúrate de que las rutas estén correctamente configuradas
  ]
}).catch((err) => console.error(err));
