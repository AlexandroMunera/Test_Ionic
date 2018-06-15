import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServices } from '../../services/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

 
  id = null;
  note:any = [{id:null, title:null, description:null}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteServices : NoteServices) {
    
    this.id = navParams.get('id');

    this.note = noteServices.getNote(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
