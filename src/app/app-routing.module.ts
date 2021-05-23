import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserCards2Component } from './user-cards2/user-cards2.component';

const routes: Routes = [
  {path: 'user-cards', component: UserCardsComponent},
  {path: 'user-cards2', component: UserCards2Component},
  {path: '', redirectTo: '/user-cards', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [UserCardsComponent, UserCards2Component]
