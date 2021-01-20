import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Web3 from 'web3';

@Component({
  selector: 'app-form-four',
  templateUrl: './form-four.component.html',
  styleUrls: ['./form-four.component.scss']
})
export class FormFourComponent implements OnInit {

  debtForm: any;
  fromAddress!: string;
  contract: any;
  recipientAddress: any;
  hash: any;
  Address = "0x75576d08c398157a5053d49f5d6fbb22514ff157"; //0x0f1B6EDa3D3E6B4A6466D037d5296245C91f61ee


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    const tokenAbi = require('../../../assets/tokenStudieschuld.json');

    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = web3.eth.net.getId().then((res: any) => {
      if (typeof res === 'undefined' || res != 4) {
        console.log("Please select Rinkeby test network");
      } else {
        console.log("Ethereum network: Rinkeby")
      }
    });

    const accounts = web3.eth.getAccounts().then((res: any) => {
      this.fromAddress = res[0];
      console.log("Address connected to MetaMask: " + this.fromAddress);
    });

    this.contract = new web3.eth.Contract(tokenAbi, this.Address);
    console.log(this.contract);
  }

  initForm() {
    this.debtForm = this.fb.group({
      wallet: ['', Validators.required],
    })
  }

  submit() {
    if (this.debtForm.valid) {
      this.createHash();
      this.awardItems();
      this.router.navigate(['/confirmation']);

    }
  }

  awardItems() {
    this.contract.methods.awardItem(this.debtForm.get('wallet').value, this.hash, "https://ipfs.io/ipfs/QmXznrJ4VBbqrhEnowNznhs4v8NHLcb41hRsYs5Mp6z1uK").send({ from: this.fromAddress}).then((res: any) => {
      console.log("Everything is ok");
    }).catch((err: any) => {
      console.log("EVerything is not ok");
      console.log(err);
    });
  }

  // Testing purposes generating hash
  createHash() {
    this.hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    console.log(this.hash);
  }
 

}
