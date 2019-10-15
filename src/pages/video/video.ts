import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
  
export class VideoPage {

  films: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    // var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;    
    // this.films = this.httpClient.get(url);
    // this.films
    // .subscribe(data => {
    //   console.log('my data: ', data);
    // })
  }
}
