import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { AboutComponent } from './+about/index';
import { HomeComponent } from './+home/index';
import { AlertsComponent } from './alerts/index';
import { LocationsComponent } from './locations/index';
import { SettingsComponent } from './settings/index';
import { NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: AlertsComponent
  },
  {
    path: '/alertes',
    component: AlertsComponent
  },
  {
    path: '/localisations',
    component: LocationsComponent
  },
  {
    path: '/parametres',
    component: SettingsComponent
  }
])
export class AppComponent {}
