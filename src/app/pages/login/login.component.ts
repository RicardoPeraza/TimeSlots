import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { SlotsService } from 'src/app/service/slots.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, public service: SlotsService) {


  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.router.navigate(['/slots', this.service.form.get('username').value]);

    this.service.form.reset();

  }

}
