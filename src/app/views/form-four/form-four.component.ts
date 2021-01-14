import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.scss']
})
export class FormFourComponent implements OnInit {

  debtForm: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.debtForm = this.fb.group({
      wallet: ['', Validators.required],
    })
  }

  submit() {
    if(this.debtForm.valid) {
      this.router.navigate(['/confirmation']);
    }
  }

}
