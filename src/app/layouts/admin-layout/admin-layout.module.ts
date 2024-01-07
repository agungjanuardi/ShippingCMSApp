import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { ShippingListsComponent } from 'app/dashboard/shipping-lists/shipping-lists.component';
import { PackageDetailListsComponent } from 'app/dashboard/package-detail-lists/package-detail-lists.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AddressConfirmationComponent } from 'app/dashboard/address-confirmation/address-confirmation.component';
import { BillingHistoryComponent } from 'app/billing-history/billing-history.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CreditInformationComponent } from 'app/billing-history/credit-information/credit-information.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { DemoMaterialModule } from 'material-module';
import { AddressBookComponent } from 'app/address-book/address-book.component';
import { AddAddressComponent } from 'app/address-book/add-address/add-address.component';
import { ProfileViewComponent } from 'app/shared/profile-view/profile-view.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatTabsModule,
    LbdModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    DemoMaterialModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    BillingHistoryComponent,
    ShippingListsComponent,
    PackageDetailListsComponent,
    AddressConfirmationComponent,
    CreditInformationComponent,
    AddressBookComponent,
    AddAddressComponent,
    ProfileViewComponent
  ]
})

export class AdminLayoutModule {}
