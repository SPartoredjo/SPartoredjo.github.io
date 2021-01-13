import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Institution {
  code: string;
  name: string;
}

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {

  public show: boolean = true;

  institutions: Institution[] = [
    {name: 'The Hague University of Applied Science', code: 'HHS'},
    {name: 'Imagine je kent een andere hoge school', code: 'Yikes'}
  ];

  debts: string[] = ['Higher than 1000', 'Higher than 2000', 'Higher than 3000', 'Higher than 4000'];

  debtForm: any;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm() {
    this.debtForm = this.fb.group({
      school: ['', Validators.required],
      debt: ['no'],
      debtAmount: ['Higher than 1000'],
      email: ['no'],
      wallet: ['', Validators.required],
    })
  }

  submit() {
    if(this.debtForm.valid) {
      this.router.navigate(['/confirmation']);
    }
  }

  detectChange() {
    if(this.debtForm.get('debt').value == "no") {
      this.debtForm.debtAmount = this.toggle();
    } else {
      this.debtForm.debtAmount = this.show = false;
    }
  }

  toggle() {
    this.show = true;
  }

}
