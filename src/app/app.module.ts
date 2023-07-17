import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsDataComponent } from './us-data/us-data.component';
import { VaxDataComponent } from './vax-data/vax-data.component';
import { GlobalDataComponent } from './global-data/global-data.component';

@NgModule({
  declarations: [
    AppComponent,
    UsDataComponent,
    VaxDataComponent,
    GlobalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
