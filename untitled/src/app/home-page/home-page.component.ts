import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

// freelancer:Freelancers[];
  location: String[];
  name_of_freelancer: String[];


  ngOnInit() {
    this.location = ["L1", "L2", "L3", "L4"];
    this.name_of_freelancer=["n1","n2","n3","n4","n5"]
    // console.log(this.location);

  }

}

// interface Freelancers{
//   id:number;
//   name:String;
//   location:String;
//   ratings:String;
// }
