import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

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
  providers:[MoovieProvider]
})
export class FeedPage {

  public usuario: Object = { nomeUsuario: "Jandrei gatao" }

  public feed = {
    title: "Jandrei carlos masiero",
    data: new Date().toDateString(),
    describe:"Fomos para londres comer sorvete",
    qtdLikes:10,
    qtdComments:25,
    timeLAstModify:new Date().toTimeString(),
    urlImagem:"assets/images/macfly.png",
    urlAvatar:"assets/images/avatar.png"
  }

  public movies = new Array<any>();

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private movieProvider: MoovieProvider
    ) {
  }

  public somaDoisNumeros(v1: number, v2: number) {
    alert(v1 + v2);
  }

  ionViewDidLoad() {
    this.movieProvider.getPopular().subscribe(data=>{
      const responseBody = (data as any)._body;
      let obj = JSON.parse(responseBody);
      this.movies = obj.results;

      console.log(obj);
    },error=>{
      console.log(error);
    });
  }

}
