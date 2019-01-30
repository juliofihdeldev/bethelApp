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

  file: MediaObject = this.media.create('http://stream.zenolive.com/rk3zd01n3reuv');

  ionViewDidLoad() 
  {
    // Create a Media instance.  Expects path to file or url as argument
    // We can optionally pass a second argument to track the status of the media

    // play the file

    this.file.play();

    /*
    this.file.onSuccess.subscribe(data =>
    {
      alert(data);  
    
    }, err=>
    {
      alert(err);
    });
    /*
    // to listen to plugin events:
    file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

    file.onSuccess.subscribe(() => console.log('Action is successful'));

    file.onError.subscribe(error => console.log('Error!', error));

    // play the file
    file.play();

    // pause the file
    file.pause();

    // get current playback position
    file.getCurrentPosition().then((position) => {
      console.log(position);
    });

    // get file duration
    let duration = file.getDuration();
    console.log(duration);

    // skip to 10 seconds (expects int value in ms)
    file.seekTo(10000);

    // stop playing the file
    file.stop();

    // release the native audio resource
    // Platform Quirks:
    // iOS simply create a new instance and the old one will be overwritten
    // Android you must call release() to destroy instances of media when you are done
    file.release();
    */
  }

  PlayPause(param)
  {
    var playPause = document.getElementById('playPause');
    
    playPause.setAttribute('src', '../../assets/icon/play.png');
    playPause.setAttribute('class', 'imgPS');

    this.file.stop();
  }
}