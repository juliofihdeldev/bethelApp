import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../../pages/main/main';
import { VideoPage } from '../../pages/video/video';
import { AudioPage } from '../../pages/audio/audio';

import { LibraryPage } from '../../pages/library/library';
import { LastestPage } from '../../pages/lastest/lastest';
import { SettingsPage } from '../../pages/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage 
{
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  video: any;
  audio: any;

  constructor(public navCtrl: NavController) 
  {
    this.tab1 = MainPage;
    this.tab2 = LibraryPage;
    this.tab3 = LastestPage;
    this.tab4 = SettingsPage;

    this.video = VideoPage;
    this.audio = AudioPage;
  }
}