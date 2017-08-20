import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public usuario: Object = { nomeUsuario: "Jandrei gatao" }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(v1: number, v2: number) {
    alert(v1 + v2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
