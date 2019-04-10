import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the LastestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-lastest",
  templateUrl: "lastest.html"
})
export class LastestPage {
  video: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LastestPage');

    this.http
      .get(
        "https://www.googleapis.com/youtube/v3/liveBroadcasts?part=contentDetails&id=C5X2gDsU_90&key=AIzaSyB1R4z7Kaa-NQYbLP4NWujKS6LyY06kAFs"
      )
      .subscribe(
        data => {
          console.log(data);

          //this.loader.dismiss();
        },
        err => {
          // alert(err);
        }
      );
  }
}
