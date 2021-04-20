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
  name:string='Bug 1';
  product:string='Product A';
  module:string='Module A';
  projectId:string="Project id";
  synopsis:string="This is information about bug";
  description:string='Bug details';
  priority:Priority
  status:Status
  type:TypeEnum
  severity:Severity
  buildVersion:string="Version A";
  developerId:number;
  testerId:number;
  etaDate:Date;
  submittedOn:Date=new Date();
  inputName:string;
  inputStatus:Status;
}

