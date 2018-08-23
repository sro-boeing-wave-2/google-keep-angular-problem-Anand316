import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'get-all-notes',
  templateUrl:'./get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.css']
})
export class GetAllNotesComponent implements OnInit {

  public notes =[];
  public notesId;

  constructor(private _noteService: NoteService,private router:Router) { }

  ngOnInit() {
    this._noteService.getAllNotes()
    .subscribe(data=>this.notes=data);

  }

  onClick(note){
    this.router.navigate(['',note.id],{skipLocationChange:true});
  }

  onEdit(note){
    this.router.navigate(['/edit',note.id],{skipLocationChange:true});
  }

 /* onClick(notes
  {
    this.router.navigate(['/delete',notes.id]);
  }
*/
}
