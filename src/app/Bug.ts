import { Type } from '@angular/core';

export enum Priority{
  HIGH,MEDIUM,LOW
}
export enum Status{
  NEW,ASSIGNED,OPEN,FIXED,PENDING_RETEST,REOPEN,VERIFIED,CLOSED,REJECTED,DUPLICATE,DEFERRED,NOT_A_BUG
}
export enum TypeEnum{
  RUN_TIME,COMPILE_TIME
}
export enum Severity{
  HIGH,MEDIUM,LOW
}
export class Bug{
  id:String;
  name:string='Bug 1';
  product:string='Product A';
  module:string='Module A';
  projectId:string="Project id";
  synopsis:string="";
  description:string='';
  priority:Priority;
  status:Status;
  type:TypeEnum=TypeEnum.COMPILE_TIME;
  severity:Severity=Severity.LOW;
  buildVersion:string="Version 1";
  developerId:number;
  testerId:number;
  etaDate:Date;
  submittedOn:Date=new Date();
  inputName:string;
  inputStatus:Status;
}

