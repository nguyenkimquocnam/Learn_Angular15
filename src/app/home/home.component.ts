import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listFruits = [
    { name: "Apple", price: 40000, bestSeller: true },
    { name : "Orange", price: 35000, bestSeller: false},
    { name : "Banana", price: -20500, bestSeller: true}
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('List Fruits = ', this.listFruits);
  }

}
