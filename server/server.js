const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 44394

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello from server');
})

app.post('/api/Notes',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data Received"});
})

app.listen(PORT,function(){
    console.log("Server running on localHost: "+PORT);
})




<!-- <mat-sidenav-container class="sidenav-container">
  <mat-sidenav #drawer class="sidenav" fixedInViewport="false" [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
    [mode]="(isHandset$ | async) ? 'over' : 'side'" [opened]="!(isHandset$ | async)">
  </mat-sidenav>
  <mat-sidenav-content>
    <mat-toolbar color="primary">
      <button type="button" aria-label="Toggle sidenav" mat-icon-button (click)="drawer.toggle()" *ngIf="isHandset$ | async">
        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
      </button>
      <span>Google Keep Notes</span>
      <span class="spacer"></span>
      <a routerLink='' (click)=onclick()>
        <mat-icon aria-label="Side nav toggle icon">home</mat-icon>
      </a>
      <a href="#">
        <mat-icon aria-label="Side nav toggle icon">label</mat-icon>
      </a>
      <a href="#">
        <mat-icon aria-label="Side nav toggle icon">note</mat-icon>
      </a>
      <a href="#">
        <mat-icon aria-label="Side nav toggle icon">help</mat-icon>
      </a>
    </mat-toolbar>
    <!-- Add Content Here -->
  <!-- </mat-sidenav-content>
</mat-sidenav-container> -->
<!-- <div class="container-fluid">
  <h1>Bootcamp Enrollment Form</h1>
  <form #userForm="ngForm" *ngIf='!submitted' (ngSubmit)="onSubmit()">

    {{userForm.value | json}}
    <hr />
    {{userModel | json}}

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" [(ngModel)]="userModel.name" name="userName" >
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" [(ngModel)]="userModel.email" name="email">
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input type="tel" class="form-control" [(ngModel)]="userModel.phone" name="phone">
    </div>

    <button class="btn btn-primary">Submit</button>

  </form>
</div> -->

<!-- <get-all-notes></get-all-notes>
<app-post-note></app-post-note>
<app-delete-note></app-delete-note>
<app-search-by-title></app-search-by-title> -->