import { Component, OnInit } from '@angular/core';
import { wrapIntoObservable } from '../../../node_modules/@angular/router/src/utils/collection';
import { NoteModel, Tag, CheckListItems } from '../noteModel';
import { NoteService } from '../note.service';
import { FormsModule,FormArray,FormBuilder,FormGroup, Validators} from '@angular/forms';
//import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-post-note',
  templateUrl: './post-note.component.html',
  styleUrls: ['./post-note.component.css']
})
export class PostNoteComponent implements OnInit {

  myForm: FormGroup;
  orderForm: FormGroup;
  checkList: any = [];
  labels:any = [];
  noteModel:NoteModel;

  constructor(private _noteService:NoteService,private fb: FormBuilder,private router:Router) {}

  ngOnInit() {
      this.myForm=this.fb.group({
      id: [,Validators.required],
      title:['',Validators.required],
      plaintext:['',Validators.required],
      pinstatus:[,Validators.required],
      checkList:this.fb.array([this.createItem()]),
      labels:this.fb.array([this.createLabel()])
    });

    //this.noteModel.myForm=this.myForm;
  }

    // this.orderForm = this.formBuilder.group({
    //   customerName: '',
    //   email: '',
    //   items: this.formBuilder.array([ this.createItem() ])


  // onSubmit(){

  //  this._noteService.postNote(this.noteModel).subscribe(data=>console.log('Success!',data),
  //  error=>console.log('Error!',error));}

  //  data=>console.log('Success!',data),
  //  error=>console.log('Error!',error)

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Id', form.value.id);
    console.log('Title', form.value.title);
    console.log('PlainText', form.value.plaintext);
    console.log('PinStauts',form.value.pinstatus);
    console.log('CheckList',form.value.checkList);
    console.log('Labels',form.value.labels)

    this.noteModel = new NoteModel(form.value.id,
                              form.value.title,
                              form.value.plaintext,
                              form.value.pinstatus,
                              form.value.checkList,
                              form.value.labels);

     this._noteService.postNote(this.noteModel).subscribe(data=>console.log('Success!',data),
     error=>console.log('Error!',error));
      this.router.navigate(['']);

  }

  addItem(): void {
    this.checkList = this.myForm.get('checkList') as FormArray;
    this.checkList.push(this.createItem());
  }

  addLabel():void{
    this.labels=this.myForm.get('labels') as FormArray;
    this.labels.push(this.createLabel());
  }

  createItem(): FormGroup {
    return this.fb.group({
      checkListItem: ['']
    });
  }

  createLabel():FormGroup{
    return this.fb.group(
      {
        label:['']
      }
    )
  }
}
