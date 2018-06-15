import { Injectable } from '@angular/core';

@Injectable()
export class NoteServices {

    notes = [{id:1, title:'Nota 1', description:'Description note 1'},
    {id:2, title:'Nota 2', description:'Description note 2'},
    {id:3, title:'Nota 3', description:'Description note 3'}];

    public getNotes(){ return this.notes; }

    public getNote(id){
        return this.notes.filter(function(e , i){return e.id = id}) [0] || {id:null,title:null,description:null};
    }
}