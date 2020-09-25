import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
 declarations: [HomePage],
 imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HomeModule
  ]
})


export class HomeModule {
}