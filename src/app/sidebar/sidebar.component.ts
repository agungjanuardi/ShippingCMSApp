import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: '../assets/img/dashboard-icon.png', class: '' },
    { path: '/shipping', title: 'Shipping Mailbox',  icon: '../assets/img/shipping-icon.png', class: '' },
    { path: '/lebels', title: 'Shipping Lebels',  icon: '../assets/img/lebel-icon.png', class: '' },
    { path: '/quotes', title: 'Saved Quotes',  icon: '../assets/img/quotes-icon.png', class: '' },
    { path: '/purchase', title: 'Assisted Purchase',  icon: '../assets/img/purchase-icon.png', class: '' }
];

export const ROUTESSETTINGS: RouteInfo[] = [
  { path: '/address', title: 'Address Book',  icon: '../assets/img/address-icon.png', class: '' },
  { path: '/saved', title: 'Saved Box Sizes',  icon: '../assets/img/saved-box-icon.png', class: '' },
  { path: '/membership', title: 'Membership Plan',  icon: '../assets/img/membership-icon.png', class: '' },
  { path: '/account', title: 'Account Details',  icon: '../assets/img/account-icon.png', class: '' },
  { path: '/billing', title: 'Billing History',  icon: '../assets/img/billing-icon.png', class: '' },
  { path: '/refer', title: 'Address Book',  icon: '../assets/img/refer-icon.png', class: '' },
  { path: '/support', title: 'Support',  icon: '../assets/img/support-icon.png', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuSettingItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuSettingItems = ROUTESSETTINGS.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
