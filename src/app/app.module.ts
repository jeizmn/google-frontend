import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { SearchComponent } from 'src/search/search.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from '@coreui/angular';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
