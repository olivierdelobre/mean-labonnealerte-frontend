import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Alert } from './alert.model';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertService {

    constructor(private http: Http) { }

    getAll() {
        return this.http.get('app/alerts.json')
            .map((res: Response) => res.json());
    }

    createOrUpdate(alert: Alert) {
        console.log("alert created or updated");
    }

    delete(alert: Alert) {
        console.log("alert deleted");
    }

}