import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {

  public notesId;
  constructor(private _noteService:NoteService,private router:ActivatedRoute) {}

  // onSubmit(){
  //   this._noteService.deleteNote(this.notesId).subscribe(data=>console.log(data));
  // }


  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get('id'))
    this.notesId=id;
    console.log(this.notesId);
    this._noteService.deleteNote(this.notesId).subscribe(data=>console.log(data));
  }

}
