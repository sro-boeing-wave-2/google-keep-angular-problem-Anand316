import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { PostNoteComponent } from './post-note/post-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { PutNoteComponent } from './put-note/put-note.component';
import { GetByTitleComponent } from './get-by-title/get-by-title.component';

const routes: Routes = [
  {path:'',component:GetAllNotesComponent},
  {path:'notes',component:GetAllNotesComponent},
  {path:'create',component:PostNoteComponent},
  {path:':id',component:DeleteNoteComponent},
  {path:'edit/:id',component:PutNoteComponent},
  {path:'getbytitle/:title',component:GetByTitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[GetAllNotesComponent,
PostNoteComponent,
DeleteNoteComponent,
PutNoteComponent,
GetByTitleComponent];
