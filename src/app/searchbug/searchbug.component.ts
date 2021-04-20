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

  ngOnInit(): void {
    const observable=this.bugService.getAllBugs();
    observable.subscribe(response =>{
      console.log(response);
      this.bugArray=response;
  })

}
}

