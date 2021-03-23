import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo: string;
  home: string;
  about: string;
  contact: string;
  addCar: string;
  donateText : string;
  clickCounter: number = 0;

  constructor() {
    this.logo = 'Melaverde';
    this.home = 'Home';
    this.about = 'About us';
    this.contact = 'Contact';
    this.addCar = 'Add car';
    this.donateText = 'Donate 10€';
  }


  countClick() {
    this.clickCounter = this.clickCounter + 10;
  }

  ngOnInit(): void {
  }

}
