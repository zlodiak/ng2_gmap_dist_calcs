import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { GmapService } from './services/gmap.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	HttpModule,
    BrowserModule,
		AgmCoreModule.forRoot({
		  apiKey: 'AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ'
		})     
  ],
  providers: [GmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
