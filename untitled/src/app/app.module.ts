import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FreelacerPageComponent } from './freelacer-page/freelacer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FreelacerPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
