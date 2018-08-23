import { Component } from '@angular/core';
import { User } from './user';
import  {NoteService} from './note.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleKeepNotes';

  submitted=false;

  userModel=new User('Rob','rob@test.com',97423);

  constructor(){}

  // onSubmit(){
  //   this.submitted=true;
  //   this._noteService.postNote(this.userModel).subscribe(
  //     data=>console.log('Success!',data),
  //     error=>console.log('Error!',error)
  //   );
  // }
}
