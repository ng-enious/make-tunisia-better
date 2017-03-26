import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginePageComponent } from './logine-page/logine-page.component';
import { AngularFireModule } from 'angularfire2';
import {AF} from "./fournisseur/af";
import { HomePageComponent } from './home-page/home-page.component';
import { routes } from './app.router';

//firebaseConfig
export const firebaseConfig = {
    apiKey: "...............",
    authDomain: "............",
    databaseURL: "..............",
    storageBucket: "............",
    messagingSenderId: "..........."
};


@NgModule({
  declarations: [
    AppComponent,
    LoginePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
