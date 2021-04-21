import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';
import { Priority } from '../Bug';
import { TypeEnum } from '../Bug';
import { Severity  } from '../Bug';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {
  createMode:boolean;
  id:string;
  bug:Bug=new Bug();
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
      alert("bug added");
      this.bugArray.push(Object.assign({},this.bug));
    },
    error=>{
      console.log(error);
      alert("error happened");

    })
  }
  updateBug(bugId:String){
    const promise=this.bugService.updateBug(bugId,this.bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("bug updated");
     },
    error=>{
      console.log(error);
      alert("error happened");

    })

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.createMode=!this.id;
      }

}
