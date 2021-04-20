import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
import { Status } from '../Bug';


@Component({
  selector: 'app-searchbug',
  templateUrl: './searchbug.component.html',
  styleUrls: ['./searchbug.component.css']
})
export class SearchbugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  statusValues=Object.values(Status).filter(x => typeof x==="string");
  constructor(private bugService: BugService) { }
  getByName(name:string){
    if(name==null){
      alert("enter name");
    }
    const observable=this.bugService.getByName(name);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with input name not found");
      }
      this.bugArray=response;
    },error=>{
      console.log(error);
      alert("enter name");
     }
    )
  }
  getByStatus(status:Status){
    if(status==null){
      alert("enter status");
    }
    const observable=this.bugService.getByStatus(status);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with input status not found");
      }
      this.bugArray=response;

  }
    )
  }

  ngOnInit(): void {
    const observable=this.bugService.getAllBugs();
    observable.subscribe(response =>{
      console.log(response);
      this.bugArray=response;
  })

}
}

