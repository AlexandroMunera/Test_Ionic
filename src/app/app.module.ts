import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteServices } from '../services/note.service';
import { DetailPage } from '../pages/detail/detail';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAkYJ9ph8cTEMM2hh4qox-etfhHvsA4J-U",
  authDomain: "pruebafirebase-4b6f3.firebaseapp.com",
  databaseURL: "https://pruebafirebase-4b6f3.firebaseio.com",
  storageBucket: "pruebafirebase-4b6f3.appspot.com",
  messagingSenderId: '286504266601'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServices
  ]
})
export class AppModule {}
