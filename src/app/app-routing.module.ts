import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeCreateComponent } from './home/home-create/home-create.component';
import { HomeReadComponent } from './home/home-read/home-read.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'create', // Child route for 'Create Item'
        component: HomeCreateComponent,
      },
      {
        path: 'reports', 
        component: HomeReadComponent,
      }
    ],
  },
  {
    path: 'login', 
    component: LoginComponent, // Route to login component
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}