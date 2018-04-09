import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { SegundoFormComponent } from './components/segundo-form/segundo-form.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: DataComponent },
  { path: 'siguiente/:parametro', component: SegundoFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
