import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';


@Injectable()
export class NoteServices{
  constructor(public afDB: AngularFireDatabase){}
  notes = [];
  public getNotes(){
    //return this.notes;
    return this.afDB.list('notas').valueChanges();
  }
  public getNote(id){
    //return this.notes.filter(function(e, i){ return e.id == id})[0] || {id:null, title:null, descripcion:null};
    return this.afDB.object('notas/'+id).valueChanges();
  }
  public createNote(note){
    //this.notes.push(note);
    this.afDB.database.ref('notas/'+note.id).set(note);
  }
  public editNote(note){
    /*for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
        this.notes[i] = note;
      }
    }*/
    this.afDB.database.ref('notas/'+note.id).set(note);
  }
  public deleteNote(note){
    /*for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
        this.notes.splice(i, 1);
      }
    }*/
    this.afDB.database.ref('notas/'+note.id).remove();
  }

}
