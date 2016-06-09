import { Component, Host } from '@angular/core';
import { NgFormModel } from '@angular/common';
import { FormValidationService } from '../form-validation.service';
     
@Component({
  selector: 'form-control-messages',
  inputs: ['controlName: control'],
  template: `<div class="alert alert-danger" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class FormControlMessagesComponent {
  controlName: string;

  constructor(@Host() private _formDir: NgFormModel) { }
     
  get errorMessage() {
    // Find the control in the Host (Parent) form
    let c = this._formDir.form.find(this.controlName);
     
    for (let propertyName in c.errors) {
	  // If control has a error
      if (c.errors.hasOwnProperty(propertyName) && c.touched) {
 	    // Return the appropriate error message from the Validation Service
        return FormValidationService.getValidatorErrorMessage(propertyName);
      }
    }
        
    return null;
  }
}