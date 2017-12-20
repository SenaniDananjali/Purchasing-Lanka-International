import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';

import {DataService} from './services/data.service';
import {CardsComponent} from './components/cards/cards.component';
import {FooterComponent} from './components/footer/footer.component';
import {StylistComponent} from './components/stylist/stylist.component';

import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


const appRoutes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'stylist', component: StylistComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardsComponent,
    FooterComponent,
    StylistComponent,
    CalendarComponent,


  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonToggleModule,
    MatButtonModule, MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
