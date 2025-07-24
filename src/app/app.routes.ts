import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Contact } from './pages/contact/contact';
import { InventarioComponent } from './pages/inventario-component/inventario-component';

export const routes: Routes = [
    { path: '', component: MainPage},
    { path: 'contact', component: Contact},
    { path: 'inventario', component: InventarioComponent }
];
