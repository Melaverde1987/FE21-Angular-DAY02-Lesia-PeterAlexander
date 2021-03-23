import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarForm = new FormGroup({
    image: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    color: new FormControl(''),
    year: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor() { }

  cars = [
    {
      image: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg',
      name: "Ferrari",
      color: 'blue',
      year: 2010,
      price: 10000
    },
    {
      image: 'https://static.theceomagazine.net/wp-content/uploads/2019/12/12081609/ferrari.jpg',
      name: "Mazda",
      color: 'red',
      year: 2010,
      price: 15000
    },
    {
      image: 'https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg',
      name: "Cadillac",
      color: 'golden',
      year: 2010,
      price: 80000
    }
  ];
  
  onSubmit() {
    if (this.addCarForm.valid) {
      var a = this.addCarForm.value;
      console.table(a)
      this.cars.push(a);
    }
  }

  ngOnInit(): void {
  }

}
