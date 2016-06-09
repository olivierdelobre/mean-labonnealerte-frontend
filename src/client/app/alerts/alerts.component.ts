import { Component, OnInit } from '@angular/core';
import { Alert } from './alert.model';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-alerts',
  templateUrl: 'alerts.component.html',
  styleUrls: ['../../css/main.css', 'alerts.component.css'],
  directives: [AlertComponent],
  providers: [AlertService]
})
export class AlertsComponent implements OnInit {
  alerts: Alert[];
  selectedAlert: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAll()
      .subscribe(alerts => this.alerts = alerts);
    
    // this.alerts = this.alertService.getAlerts();
  }


  onSelect(alert: Alert) {
    this.selectedAlert = alert;
  }

  onNewAlert() {
    this.selectedAlert = new Alert();
  }

}
