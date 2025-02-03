import { Routes } from '@angular/router';
import { SenalComponent } from './components/senal/senal.component';
import { authGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'signal', component: SenalComponent, canActivate: [authGuard] },
  { path: 'home', component: AppComponent },
];
