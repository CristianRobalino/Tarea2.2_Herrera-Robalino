import { Route } from '@angular/router';
import { TropicalComponent } from './tropical/tropical.component';
import { MangoComponent } from './tropical/mango/mango.component';
import { PapayaComponent } from './tropical/papaya/papaya.component';  // Importamos el nuevo componente
import { CocoComponent } from './tropical/coco/coco.component';
import { AguacateComponent } from './tropical/aguacate/aguacate.component';  // Importamos el nuevo componente
import { PiniaComponent } from './tropical/pinia/pinia.component';
export const routes: Route[] = [
  {
    path: 'tropical',
    component: TropicalComponent,
    children: [
      { path: 'mango', component: MangoComponent },
      { path: 'papaya', component: PapayaComponent },
      { path: 'coco', component: CocoComponent },
      { path: 'aguacate', component: AguacateComponent },
      { path: 'pinia', component: PiniaComponent},
    ]
  },
  { path: '', redirectTo: '/tropical', pathMatch: 'full' }  // Esta línea es para redirigir la raíz a /tropical
];

