import { FormGroup } from "../../node_modules/@angular/forms";

export class NoteModel {
  constructor(public id:number,
  public title:string,
  public plaintext:string,
  public pinstatus:boolean,
  public checkList:CheckListItems[],
  public labels:Tag[]){}S
  // myForm:FormGroup;
  // public title:string;
  //  public plaintext:string;
  //  public pinstatus:boolean;
  // public checkList:CheckListItems[];
  // public labels:Tag[];
}

export class Tag {
  constructor(
    public label:string){}
}

export class CheckListItems {
    constructor(
    public checkListItemOne:string){}
}
