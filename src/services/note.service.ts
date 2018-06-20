import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { throttleTime } from 'rxjs/operators';

@Injectable()
export class NoteServices {

    constructor(public afDB: AngularFireDatabase){}

    notes = [{id:1, title:'Nota 1', description:'Description note 1'},
    {id:2, title:'Nota 2', description:'Description note 2'},
    {id:3, title:'Nota 3', description:'Description note 3'}];

    public getNotes(){
         return this.afDB.list('notas/').valueChanges();
    }

    public getNote(id){
        // return this.notes.filter(function(e , i){return e.id == id}) [0] || {id:null,title:null,description:null};
        return this.afDB.list('notas/' + id).valueChanges();
    }

    public createNote(note){
        //this.notes.push(note);
        console.log(note);
        this.afDB.database.ref('notas/'+ note.id).set(note);
    }

    public editNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }
    }

    public deleteNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i,1);
            }
        }
    }
}