import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { HomePage } from '../pages/home/home';

const config = {
  apiKey: "AIzaSyCAZu48fjN4Axsq4XLNaZNZxqvqxa-CSXw",
    authDomain: "geotracker-a81dd.firebaseapp.com",
    databaseURL: "https://geotracker-a81dd.firebaseio.com",
    projectId: "geotracker-a81dd",
    storageBucket: "geotracker-a81dd.appspot.com",
    messagingSenderId: "469509832320"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
