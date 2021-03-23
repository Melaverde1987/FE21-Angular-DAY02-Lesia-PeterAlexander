import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  
  info = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    email: new FormControl('', Validators.required),
  });

  constructor() {
    
  }

  cars = [
    {
      image: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg',
      name: "Ferrari",
      color:'blue',
      type: 'A3',
      year: 2010,
      numberOfSeats: 5,
      price: 10000
    }, 
    {
      image: 'https://static.theceomagazine.net/wp-content/uploads/2019/12/12081609/ferrari.jpg',
      name: "Mazda",
      color: 'red',
      type: 'C10',
      year: 2010,
      numberOfSeats: 4,
      price: 15000
    }, 
    {
      image: 'https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg',
      name: "Cadillac",
      color: 'golden',
      type: 'B13',
      year: 2010,
      numberOfSeats: 8,
      price: 80000
    }
  ];

  countClick() {
    this.clickCounter++;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.info.valid) {
      var a = this.info.value;
      console.log(a)
    }
    
    
    // to take the values from the form you can select the property that have the formGroup and then just add .value
    //var a = this.info.value;
    //var a = this.info.value.firstName;
    //console.log(a)
  }

}
