import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout-component";
import { MainPage } from "../../pages/main-page/main-page";
import { InventarioComponent } from "../../pages/inventario-component/inventario-component";
import { Contact } from "../../pages/contact/contact";




export const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: MainPage},
            {path: 'inventario', component: InventarioComponent},
            {path: 'contact', component: Contact}
        ]
    }
]