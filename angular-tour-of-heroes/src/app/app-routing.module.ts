import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent},
  { path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PersonComponent, HeroesComponent];
