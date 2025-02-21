import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  text: string;

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.min(3)),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    checkbox: new FormControl('', Validators.requiredTrue),
  });

  constructor() {
    this.text = 'Contact us';
  }


  onSubmit() {
    if (this.contactForm.valid) {
      var a = this.contactForm.value;
      console.table(a)
    } else {
      alert('Something is wrong');
    }
  }

  ngOnInit(): void {
  }

}
