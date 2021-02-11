import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertDatePipe } from './shared/pipes/convert-date.pipe';
import { AgmCoreModule } from '@agm/core';
import { MathFixedPipe } from './shared/pipes/math-fixed.pipe';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationComponent,
    ConvertDatePipe,
    MathFixedPipe,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
