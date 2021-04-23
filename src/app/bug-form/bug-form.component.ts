import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';
import { ActivatedRoute } from '@angular/router';
// import {  SearchbugComponent } from '../searchbug/searchbug.component';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {
  createMode:boolean;
  id:string;
  bug:Bug=new Bug();
  bug2:Bug=new Bug();
  bugArray:any=[];
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService,
    private route:ActivatedRoute) { }
  //create bug
  save(){
    const currentDate=new Date();
    const eta=new Date(this.bug.etaDate);
    if(eta<currentDate){
      alert('ETA has to be future date');
    }
    const promise=this.bugService.save(this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("Bug added");
      this.bugArray.push(Object.assign({},this.bug));
    },
    error=>{
      console.log(error);
      alert("Error:fill al required fields");
    })
  }
  updateBug(bugName:String,bugId:String){
    if(bugName==null){
      alert("Enter bug name");
    }
    else{
      console.log(this.bug2.id);
    const promise=this.bugService.updateBug(bugId,this.bug2);
    promise.subscribe(response=>{
      console.log(response);
      alert("Bug updated");
     },
    error=>{
      console.log(error);
      alert("Error");
    })
  }
}
  getByName(name:string){
    if(name==null){
      alert("enter name");
    }
    else{
    const observable=this.bugService.getByName(name);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with input name not found");
      }
      this.bugArray=response;
       console.log(this.bugArray[0].id);
      this.bug2.id=this.bugArray[0].id;
      this.bug2.name=this.bugArray[0].name;
      this.bug2.product=this.bugArray[0].product;
      this.bug2.module=this.bugArray[0].module;
      this.bug2.description=this.bugArray[0].description;
      this.bug2.synopsis=this.bugArray[0].synopsis;
      this.bug2.buildVersion=this.bugArray[0].buildVersion;
      this.bug2.status=this.bugArray[0].status;
      this.bug2.priority=this.bugArray[0].priority;
      this.bug2.type=this.bugArray[0].type;
      this.bug2.severity=this.bugArray[0].severity;
      this.bug2.testerId=this.bugArray[0].testerId;
      this.bug2.developerId=this.bugArray[0].developerId;
      this.bug2.etaDate=this.bugArray[0].etaDate;
    },error=>{
      console.log(error);
      alert("error: enter name");
     })
  }
}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.createMode=!this.id;
   }
}
