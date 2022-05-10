import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from '../components/dashboard/dasboard.component';
import { AuthGaurd } from './auth-guard';

const routes: Routes = [
{ path: 'admin', component: DasboardComponent, canActivate:[AuthGaurd] },
];

export const AdminRoutes = RouterModule.forChild(routes);
