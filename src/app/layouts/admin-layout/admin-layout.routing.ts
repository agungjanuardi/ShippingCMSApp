import { Routes } from '@angular/router';
import { AddressBookComponent } from 'app/address-book/address-book.component';
import { BillingHistoryComponent } from 'app/billing-history/billing-history.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'billing-history', component: BillingHistoryComponent},
    { path: 'address-book', component: AddressBookComponent}
];
