import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MainPage } from "../pages/main/main";
import { ListPage } from "../pages/list/list";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { TabsPage } from "../pages/tabs/tabs";

import { AudioPage } from "../pages/audio/audio";
import { VideoPage } from "../pages/video/video";
import { DonatePage } from "../pages/donate/donate";

import { LibraryPage } from "../pages/library/library";
import { LastestPage } from "../pages/lastest/lastest";
import { SettingsPage } from "../pages/settings/settings";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpClientModule } from "@angular/common/http";

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';


import { Media } from "@ionic-native/media";

/*
Runtime Error
Uncaught (in promise): Error: StaticInjectorError(AppModule)[Http -> ConnectionBackend]: StaticInjectorError(Platform: core)[Http -> ConnectionBackend]: NullInjectorError: No provider for ConnectionBackend! Error: StaticInjectorError(AppModule)[Http -> ConnectionBackend]: StaticInjectorError(Platform: core)[Http -> ConnectionBackend]: NullInjectorError: No provider for ConnectionBackend! at _NullInjector.get (http://localhost:8100/build/vendor.js:1377:19) at resolveToken (http://localhost:8100/build/vendor.js:1675:24) at tryResolveToken (http://localhost:8100/build/vendor.js:1617:16) at StaticInjector.get (http://localhost:8100/build/vendor.js:1485:20) at resolveToken (http://localhost:8100/build/vendor.js:1675:24) at tryResolveToken (http://localhost:8100/build/vendor.js:1617:16) at StaticInjector.get (http://localhost:8100/build/vendor.js:1485:20) at resolveNgModuleDep (http://localhost:8100/build/vendor.js:11270:25) at _createClass (http://localhost:8100/build/vendor.js:11309:29) at _createProviderInstance$1 (http://localhost:8100/build/vendor.js:11281:26)
Stack
Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[Http -> ConnectionBackend]: 
  StaticInjectorError(Platform: core)[Http -> ConnectionBackend]: 
    NullInjectorError: No provider for ConnectionBackend!
Error: StaticInjectorError(AppModule)[Http -> ConnectionBackend]: 
  StaticInjectorError(Platform: core)[Http -> ConnectionBackend]: 
    NullInjectorError: No provider for ConnectionBackend!
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    ListPage,
    AudioPage,
    VideoPage,
    DonatePage,
    LibraryPage,
    LastestPage,
    SettingsPage,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    AudioPage,
    VideoPage,
    DonatePage,
    LibraryPage,
    LastestPage,
    SettingsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Media,
    YoutubeVideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
