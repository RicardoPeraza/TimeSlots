import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  constructor() {

    
   }

   form: FormGroup = new FormGroup({
    id: new FormControl(null),
    username: new FormControl('', Validators.required)
  
  });

   initializeFormGroup() {
    this.form.setValue({
      id: null,
      nombre: '',
      poder: ''
      
    });
  }
}
