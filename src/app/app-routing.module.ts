import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BisoteriaComponent } from './components/bisoteria/bisoteria.component';
import { CorteLaserComponent } from './components/corte-laser/corte-laser.component';
import { ReparacionesComponent } from './components/reparaciones/reparaciones.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// Guards
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'bisoteria', component: BisoteriaComponent },
  { path: 'corte-laser', component: CorteLaserComponent },
  { path: 'reparaciones', component: ReparacionesComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
