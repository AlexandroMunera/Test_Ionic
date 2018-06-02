import { Injectable } from '@angular/core';

@Injectable()
export class NoteServices {

    notes = [{id:1, title:'Nota 1', description:'Description note 1'},
    {id:2, title:'Nota 2', description:'Description note 2'},
    {id:3, title:'Nota 3', description:'Description note 3'}];

    public getNotess(){ return this.notes; }
}