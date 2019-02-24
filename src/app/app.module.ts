import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyPickerComponent } from './party-picker/party-picker.component';
import { HomeComponent } from './home/home.component';
import { CardPickerComponent } from './card-picker/card-picker.component';
import { LearnPartyComponent } from './learn-party/learn-party.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyPickerComponent,
    HomeComponent,
    CardPickerComponent,
    LearnPartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
