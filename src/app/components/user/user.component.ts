import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLogged: boolean = false;
  level: number = 5;

  changeLogged(value: boolean) {
    this.isLogged = value;
  }

  validateLevel() {
    var result = false;
    this.level >= 10 ? result = true : result = false;
    return result;
  }

  addLevel() {
    this.level ++;
  }

}
