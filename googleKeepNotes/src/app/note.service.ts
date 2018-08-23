import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from '../../node_modules/rxjs';
import { INote } from './INote';
import {User} from './user';
import { NoteModel } from './noteModel';
import { HttpHeaders} from '@angular/common/http';
import { FormGroup } from '../../node_modules/@angular/forms';

const httpOptions ={
  headers:
 new HttpHeaders(
  {
    'content-type':'application/json'
  }
)};

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  private _url:string = "https://localhost:44394/api/Notes";
  //private url:string="https://localhost:44394/api/Notes";
  getAllNotes():Observable<INote[]>{
    return this.http.get<INote[]>(this._url);
  }

  postNote(note:NoteModel){
    return this.http.post(this._url,note,httpOptions);
  }

  deleteNote(id:number){
   return this.http.delete('https://localhost:44394/api/Notes/delete/'+id,httpOptions);
  }

  searchByTitle(title:string):Observable<INote[]>{
    return this.http.get<INote[]>(this._url+'/get/'+title);
  }

  getNoteById(id:number):Observable<NoteModel>{
    return this.http.get<NoteModel>('https://localhost:44394/api/Notes/getbyid/'+id);
  }

  updateNote(id:number,note:NoteModel){
    return this.http.put('https://localhost:44394/api/Notes'+"/"+id,note,httpOptions);
  }

  getByTitle(title:string):Observable<NoteModel[]>{
    return this.http.get<NoteModel[]>('https://localhost:44394/api/Notes/get/'+title);
  }

}
