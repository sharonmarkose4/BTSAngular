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
  bugArray:Bug[]=[];
  statusValues=Object.values(Status);
  priorityValues=Object.values(Priority);
  typeValues=Object.values(TypeEnum);
  severityValues=Object.values(Severity);
  constructor(private bugService: BugService) { }
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
    this.bugService.getAllUsers();
  }

}
