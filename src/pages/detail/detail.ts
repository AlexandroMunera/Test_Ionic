import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServices } from '../../services/note.service';
import { AlertController } from 'ionic-angular';

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
  textSaveOrUpdate:string = "Save";

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteServices : NoteServices,private alertCtrl: AlertController) {
    
    this.id = navParams.get('id');

    if (this.id == 0) { 
      this.textSaveOrUpdate = "Save";
    }else{
      this.textSaveOrUpdate = "Update";
    }
    this.note = noteServices.getNote(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  public addNote(){

    if (this.id != 0) {
      this.noteServices.editNote(this.note);

      let alert = this.alertCtrl.create({
        title: 'Note Updated !!'
      });

      alert.present();

    } else {
      this.note.id = Date.now();
      this.noteServices.createNote(this.note);

      let alert = this.alertCtrl.create({
        title: 'Note Created.',
        subTitle: 'Congratulations !!'
      });

      alert.present();
    }
    this.navCtrl.pop();

  }

  public deleteNote(){
      this.noteServices.deleteNote(this.note);

      let alert = this.alertCtrl.create({
        title: 'Note Deleted !!'
      });

      alert.present();

      this.navCtrl.pop();
  }

}
