import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from './location.model';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {

    constructor(private http: Http) { }

    getAll() {
        return this.http.get('app/locations.json')
            .map((res: Response) => res.json());
    }

    createOrUpdate(location: Location) {
        console.log("location created or updated");
    }

    delete(location: Location) {
        console.log("location deleted");
    }
}