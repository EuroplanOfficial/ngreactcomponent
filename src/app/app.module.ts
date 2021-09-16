import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleBadgesModule } from 'ngreactcomponentlib/lib/ng-simple-badges';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSimpleBadgesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
