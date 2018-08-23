import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-search-by-title',
  templateUrl: './search-by-title.component.html',
  styleUrls: ['./search-by-title.component.css']
})
export class SearchByTitleComponent implements OnInit {

  public notes =[];
  constructor(private _noteServie:NoteService) { }

  ngOnInit() {
    this._noteServie.searchByTitle("Mobiles").subscribe(data=>this.notes=data);
  }

}
