import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartyPickerComponent }   from './party-picker/party-picker.component';
import { CardPickerComponent }   from './card-picker/card-picker.component';
import { LearnPartyComponent }   from './learn-party/learn-party.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'party-picker', component: PartyPickerComponent },
  { path: 'card-picker', component: CardPickerComponent },
  { path: 'learn-party', component: LearnPartyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
