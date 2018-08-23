import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './note.service';
import {HttpClientModule} from '@angular/common/http'
//import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { FormsModule,FormArray,FormBuilder,FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PutNoteComponent } from './put-note/put-note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,MatGridListModule,MatCardModule,MatMenuModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GetByTitleComponent } from './get-by-title/get-by-title.component';
// import { PostNoteComponent } from './post-note/post-note.component';
// import { DeleteNoteComponent } from './delete-note/delete-note.component';
// import { SearchByTitleComponent } from './search-by-title/search-by-title.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PutNoteComponent,
    MainNavComponent,
    GetByTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     LayoutModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatGridListModule,
     MatCardModule,
     MatMenuModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
