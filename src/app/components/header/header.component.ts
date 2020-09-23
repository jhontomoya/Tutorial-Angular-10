import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("State Component beging create");
  }

  ngOnInit(): void {
    console.log("State Created Component");
  }

  name = "John";
  numRequest = 0;
  arr = [1,2,3,4,5,6,7,8,9];

  changeName() {
    this.name ="John Tomoya";
  }

  addRequest() {
    this.numRequest += 1;
  }
  addNumber() {
    this.arr.push(Math.random());
  }

}
