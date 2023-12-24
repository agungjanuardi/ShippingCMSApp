import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import * as Chartist from 'chartist';
import { ChartType, LegendItem } from 'app/lbd/lbd-chart/lbd-chart.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    }

}
