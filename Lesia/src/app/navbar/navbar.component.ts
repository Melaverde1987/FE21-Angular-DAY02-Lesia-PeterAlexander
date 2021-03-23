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
  clickCounter: number = 0;

  constructor() {
    this.logo = 'Melaverde';
    this.home = 'Home';
    this.about = 'About us';
    this.contact = 'Contact';
  }


  countClick() {
    this.clickCounter = this.clickCounter + 10;
  }

  ngOnInit(): void {
  }

}
