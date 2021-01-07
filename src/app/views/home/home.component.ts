import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Institution {
  code: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  institutions: Institution[] = [
    {name: 'The Hague University of Applied Science', code: 'HHS'},
    {name: 'Imagine je kent een andere hoge school', code: 'Yikes'}
  ];

  debts: string[] = ['Higher than 1000', 'Higher than 2000', 'Higher than 3000', 'Higher than 4000'];

  debtForm;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.debtForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      school: ['', Validators.required],
      debt: ['no'],
      debtAmount: ['Higher than 1000'],
      email: ['no'],
      wallet: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if(this.debtForm.valid) {
      this.router.navigate(['/confirmation']);
    }
  }

}
