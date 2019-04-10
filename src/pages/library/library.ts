import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoadingController } from "ionic-angular";

// import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";

import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-library",
  templateUrl: "library.html"
})
export class LibraryPage {
  posts: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private http: HttpClient // private fb: Facebook
  ) {}

  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });

  ionViewDidLoad() {
    this.presentLoading();

    this.http
      .get(
        "https://graph.facebook.com/me/posts/?access_token=EAAQ5ZAqqQ7CgBACQ4sW1mPAxgzjz2KZBcbzPzDysGGjwz08ketI47ZC3UryUd4TegwXml6JDId5Nkmp8w7SgCZA19rWYTxRg2sUDf3dj6OIL5BPf9uphbmZBaR9EZB2LyQtnCbMO203RCcSktCJS0Le73KWHSZBbnIyTZAgnyF0mgVwR8pmvYYDHLfqLU7qAXkYZD&fields=created_time,story,id,picture,message",
        { headers: this.headers }
      )
      .subscribe(
        data => {
          console.log("Show the result", data);
          this.posts = data["data"];
        },
        err => {
          // alert(err);
          this.loader.dismiss();
        }
      );
      this.loader.dismiss();
  }

  presentLoading() {
    this.loader.present();
  }
}
