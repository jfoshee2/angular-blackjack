import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardService} from './card.service';
import {HttpClientModule} from '@angular/common/http';
import { HandComponent } from './hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
