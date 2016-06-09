import { Component, Input } from '@angular/core';
import { Alert } from './alert.model';
import { AlertService } from './alert.service';
import { FormBuilder, Validators } from '@angular/common';
import { FormControlMessagesComponent } from '../shared/form-control-messages/form-control-messages.component';
import { FormValidationService } from '../shared/form-validation.service';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    directives: [FormControlMessagesComponent],
    providers: [AlertService]
})
export class AlertComponent {
    @Input() alert: Alert;
    newAlert: Alert;
    submitted = false;
    alertForm: any;

    constructor(private alertService: AlertService, private formBuilder: FormBuilder) {
        this.alertForm = formBuilder.group({
            'id': [''],
            'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'url': ['', Validators.compose([Validators.required, FormValidationService.leboncoinUrlValidator])],
            'distancelimit': ['', Validators.compose([Validators.required, FormValidationService.integerValidator])]
        })
    }

    onSubmit() { this.submitted = true; }

    updateAlert() {
        if (this.alertForm.dirty && this.alertForm.valid) {
            let formValue = this.alertForm.value;
            this.newAlert = new Alert();
            this.newAlert.id = formValue.id;
            this.newAlert.name = formValue.name;
            this.newAlert.url = formValue.url;
            this.newAlert.distancelimit = formValue.distancelimit;

            console.log(this.newAlert);

            this.alertService.createOrUpdate(this.newAlert);
        }
    }

    get diagnostic() { return JSON.stringify(this.alert); }

}