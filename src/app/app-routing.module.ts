import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DetailComponent } from './detail/detail.component';


const appRoutes: any = [
    { path: 'detail/:id', component: DetailComponent },
    { path: '',component: HeroesComponent, pathMatch: 'full' },
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DetailComponent
    ],
    exports: [RouterModule]
    

})
export class AppRoutingModule { }