import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 public Rews: any;
 public query:string = "";
 public list:string= "";
 //document.createElement("div");
 //public query; make html connected variable
  constructor(public brew: ServicesService) { }
 

  ngOnInit(): void {
  }
  onClick() {
    let checkSource: string ;
    this.brew.getBreweries().subscribe( response => {
    this.Rews = JSON.stringify(response);
    checkSource = this.Rews;
    console.log(checkSource);
    for(let i = 0; i<checkSource.length;i++){
      let query = checkSource[i];
      if(this.list == this.Rews.name ){
       return this.Rews.name[i];
      }
      //:!help needed to figure out how to take in user input from html (var x)
      // to compare to query.:! 
      //if statement query.equals(var x )
      //html display: query[i];    
    }
    })
    } 
  
  }
