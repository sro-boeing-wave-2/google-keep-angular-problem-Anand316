import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-get-by-title',
  templateUrl: './get-by-title.component.html',
  styleUrls: ['./get-by-title.component.css']
})
export class GetByTitleComponent implements OnInit {

  title:string;
  notes=[];
  constructor(private router:ActivatedRoute,private _noteService:NoteService,private route:Router) { }

  ngOnInit() {
    this.title =this.router.snapshot.paramMap.get('title');
    console.log(this.title);
    this._noteService.getByTitle(this.title).subscribe(data=>{this.notes=data,console.log(data)});
  }

  onClick(note){
    this.route.navigate(['',note.id],{skipLocationChange:true});
  }

  onEdit(note){
    this.route.navigate(['/edit',note.id],{skipLocationChange:true});
  }

}
