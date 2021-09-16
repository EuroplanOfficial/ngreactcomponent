import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgAvatarModule } from 'ngreactcomponentlib';
// import { NgSimpleBadgesModule } from 'projects/ngreactcomponentlib/src/lib/ng-simple-badges/ng-simple-badges.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
