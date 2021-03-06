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
  isReadMore = true
  showSynopsis(synopsis:string){
    alert(synopsis);
  }
  showDescription(description:string){
    alert(description);
  }
  //search bug by name
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
    },error=>{
      console.log(error);
      alert("error: enter name");
     }
    )
  }
}
  //search bug by status
  getByStatus(status:Status){
    if(status==null){
      alert("enter status");
    }
    else{
    const observable=this.bugService.getByStatus(status);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with input status not found");
      }
      this.bugArray=response;
  } )
}
  }
  //search by combination of status and name
  getByStatusAndName(status:Status,name:string){
    if(status==null || name==null){
      alert("enter both  status and name");
    }
    else{
    const observable=this.bugService.getByStatusAndName(status,name);
    observable.subscribe(response => {
      console.log(response);
      if(response==0){
        alert(" Bug with input status and name not found");
      }
      this.bugArray=response;
    })
  }
  }

   //delete bug
   deleteBug(bugId:String,index:number){
    const confirmSelected=confirm("Delete bug?")
    if(confirmSelected==true){
    const observable=this.bugService.deleteBug(bugId);
    observable.subscribe(response => {
      this.bugArray.splice(index,1);
      alert('Bug deleted');
  } )
  }
}

  ngOnInit(): void {
    //to display table on page load
    const observable=this.bugService.getAllBugs();
    observable.subscribe(response =>{
      console.log(response);
      this.bugArray=response;
  })

}
}

