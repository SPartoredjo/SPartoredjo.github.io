import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {

  debtForm;

  constructor(private fb: FormBuilder, private router: Router) {
    this.debtForm = this.fb.group({
      bsn: ['', Validators.required],
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
