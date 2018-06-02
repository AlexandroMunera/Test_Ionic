import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteServices } from '../../services/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public noteServices : NoteServices) {
    
  }

}
