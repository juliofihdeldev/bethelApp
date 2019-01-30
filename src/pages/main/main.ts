import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideoPage } from '../../pages/video/video';
import { AudioPage } from '../../pages/audio/audio';
import { DonatePage } from '../../pages/donate/donate';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad MainPage');
  }

  openOtherPage(page)
  {
    if(page == "video")
    {
      this.navCtrl.push(VideoPage);
    }
    else if(page == "audio")
    {
      this.navCtrl.push(AudioPage);
    }
    else if(page == "donate")
    {
      this.navCtrl.push(DonatePage);
    }
  }
}
