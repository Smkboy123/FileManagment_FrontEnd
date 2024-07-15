import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent },
    {path:'services', component: ServicesComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}