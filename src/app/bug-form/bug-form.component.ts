import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  priorityValues=Object.values(Priority).filter(x => typeof x==="string");;
  typeValues=Object.values(TypeEnum).filter(x => typeof x==="string");;
  severityValues=Object.values(Severity).filter(x => typeof x==="string");;
  constructor(private bugService: BugService) { }
  getByName(name:string){
    const observable=this.bugService.getByName(name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray=response;
    })
  }
  getByStatus(status:Status){
    const observable=this.bugService.getByStatus(status);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray=response;
    })
  }
  save(){
    const promise=this.bugService.save(this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("bug added");
      this.bugArray.push(Object.assign({},this.bug));
    },
    error=>{
      console.log(error);
      alert("error happened");

    })
  }
  ngOnInit(): void {
    const observable=this.bugService.getAllBugs();
    observable.subscribe(response =>{
      console.log(response);
      this.bugArray=response;
    })

  }

}
