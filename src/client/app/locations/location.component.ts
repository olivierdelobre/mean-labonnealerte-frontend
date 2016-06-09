import { Component, Input } from '@angular/core';
import { Location } from './location.model';
import { LocationService } from './location.service';
import { FormBuilder, Validators } from '@angular/common';
import { FormControlMessagesComponent } from '../shared/form-control-messages/form-control-messages.component';
import { FormValidationService } from '../shared/form-validation.service';

@Component({
    moduleId: module.id,
    selector: 'location-form',
    templateUrl: 'location.component.html',
    directives: [FormControlMessagesComponent],
    providers: [LocationService]
})
export class LocationComponent {
    @Input() location: Location;
    newLocation: Location;
    submitted = false;
    locationForm: any;

    constructor(private locationService: LocationService, private formBuilder: FormBuilder) {
        this.locationForm = formBuilder.group({
            'id': [''],
            'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'zipcode': ['', Validators.compose([Validators.required, FormValidationService.zipcodeValidator, Validators.minLength(5), Validators.maxLength(5)])]
        })
    }

    onSubmit() { this.submitted = true; }

    updateLocation() {
        if (this.locationForm.dirty && this.locationForm.valid) {
            let formValue = this.locationForm.value;
            this.newLocation = new Location();
            this.newLocation.id = formValue.id;
            this.newLocation.name = formValue.name;
            this.newLocation.zipcode = formValue.zipcode;

            console.log(this.newLocation);

            this.locationService.createOrUpdate(this.newLocation);
        }
    }

    get diagnostic() { return JSON.stringify(this.location); }

}