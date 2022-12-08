import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "Nam";
  public age = 15;
  public listName = ['John', 'Maria', 'Mario'];

  constructor() {}

  ngOnInit(): void {
    console.log('List name = ', this.listName);
  }

  public resetName(){
    this.name = '';
  }
}
