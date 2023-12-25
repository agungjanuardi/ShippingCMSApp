import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ShippingListsComponent } from 'app/home/shipping-lists/shipping-lists.component';
import { PackageDetailListsComponent } from 'app/home/package-detail-lists/package-detail-lists.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatTabsModule,
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    ShippingListsComponent,
    PackageDetailListsComponent
  ]
})

export class AdminLayoutModule {}
