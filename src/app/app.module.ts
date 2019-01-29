import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {CardsComponent} from './components/cards/cards.component';
import {FooterComponent} from './components/footer/footer.component';
import {DpComponent} from './components/dp/dp.component';
import {AdvancedsearchComponent} from './components/advancedsearch/advancedsearch.component';
import {ParallaxComponent} from './components/parallax/parallax.component';
import {DataService} from './services/data.service';

import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SafeHtmlPipe} from './safe-html.pipe';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';




const appRoutes: Routes = [
  {path: '', component: ParallaxComponent},
  {path: 'dp', component: DpComponent},
  {path: 'searchCards', component: CardsComponent},
  // {path: '', component: SearchComponent},
  {path: 'advancedSearch', component: AdvancedsearchComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:BookingDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardsComponent,
    FooterComponent,
    DpComponent,
    CalendarComponent,
    AdvancedsearchComponent,
    ParallaxComponent,
    SafeHtmlPipe,
    SignupComponent,
    LoginComponent,
    BookingDetailsComponent,


  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonToggleModule,
    MatButtonModule, MatCheckboxModule,
    HttpModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
