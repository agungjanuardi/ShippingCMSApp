import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import * as Chartist from 'chartist';
import { ChartType, LegendItem } from 'app/lbd/lbd-chart/lbd-chart.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    }

}
