import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }



  title: String;

  ngOnInit() {
    this.title = 'Purchasing Lanka';
    console.log("header ins")
  }

}
