import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { NoteModel } from '../noteModel';
import { ActivatedRoute,Router} from '@angular/router';
import { INote } from '../INote';


@Component({
  selector: 'app-put-note',
  templateUrl: './put-note.component.html',
  styleUrls: ['./put-note.component.css']
})
export class PutNoteComponent implements OnInit {

 public  noteModel:NoteModel;
  notesId:number;
  constructor(private _noteService:NoteService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.notesId = parseInt(this.router.snapshot.paramMap.get('id'))
    //this.notesId=id;
    console.log(this.notesId);

    this._noteService.getNoteById(this.notesId).subscribe(data=>{this.noteModel=data;console.log(this.noteModel)});
    this.route.navigate(['']);
  }


  getbyid(){
    this.notesId = parseInt(this.router.snapshot.paramMap.get('id'))
    //this.notesId=id;
    console.log(this.notesId);

    this._noteService.getNoteById(this.notesId).subscribe(data=>{this.noteModel=data;console.log(this.noteModel)});
  }

  onSubmit()
  {
    this._noteService.updateNote(this.notesId,this.noteModel).subscribe(data=>console.log(data));
  }

}
