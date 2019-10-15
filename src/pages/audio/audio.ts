import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage 
{
  constructor(public navCtrl: NavController, public navParams: NavParams, private media: Media) {}
  url: any = "http://stream.zenolive.com/cty22fw7n6duv";
  testUrl: any = "http://programmerguru.com/android-tutorial/wp-content/uploads/2013/04/hosannatelugu.mp3";
  file: MediaObject = this.media.create(this.url);
  isAudioPlaying: boolean = false;
  position: number;
	duration: number;
  ionViewDidLoad() 
  {
    // Create a Media instance.  Expects path to file or url as argument
    // We can optionally pass a second argument to track the status of the media

    // play the file
    this.file.play();

    // setInterval(function () {
    //   this.file.getCurrentPosition().then((position) => {
    //     this.position = position;

    //   });
    // }, 1000);

  }

  PlayPause()
  {
    var playPause = document.getElementById('playPause'); 

    console.log("ssee", this.file.getDuration());

    if( playPause.className != "imgP" ) {
      this.file.play();
      playPause.setAttribute('src', '../../assets/icon/pause.png');
      playPause.setAttribute('class', 'imgP');
      this.isAudioPlaying = true;
    } else {
      playPause.setAttribute('src', '../../assets/icon/play.png');
      playPause.setAttribute('class', 'imgPS');
      this.isAudioPlaying = false;
      this.file.pause();
    }
  }

  // controlProgressBar(event) {
	// 	var self = this;
	// 	if(this.isAudioPlaying == true ) {
	// 	    setInterval(function () {
  //         self.file.getCurrentPosition().then((position) => {
  //           self.position = position;
  //         });
	// 	    }, 1000);
	// 	}		
	// }


  // controlSeconds(type) {
	// 	this.file.getCurrentPosition().then((position) => {
	// 		var number = Number.parseInt(position) * 1000;
	// 		switch(type){
	// 			case 'back':
	// 				this.file.seekTo(number - 15000);
	// 				break;
	// 			case 'forward':
	// 				this.file.seekTo(number + 15000);
	// 				break;
	// 		}
	// 	});
	// }
}