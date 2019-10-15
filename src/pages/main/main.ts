import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideoPage } from '../../pages/video/video';
import { AudioPage } from '../../pages/audio/audio';
import { DonatePage } from '../../pages/donate/donate';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public iab: InAppBrowser) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad MainPage');
  }
  broswer: any;
  
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
    else if(page == "facebook")
    {
      this.broswer = this.iab.create('https://web.facebook.com/BethelEvangelical233Pearl/?ref=bookmarks', '_blank', 'location=yes');
    }
    else if(page == "twitter")
    {
      this.broswer = this.iab.create('https://twitter.com/', '_blank', 'location=yes');
    }
    else if(page == "instagram")
    {
      this.broswer = this.iab.create('https://www.instagram.com/?hl=fr');

    }
    else {
      return null
    }

  }
}
