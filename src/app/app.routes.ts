import { Routes } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'list', component: ListComponent }
];
