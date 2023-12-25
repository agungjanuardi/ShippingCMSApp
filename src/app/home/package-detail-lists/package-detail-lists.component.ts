import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-package-detail-lists',
  templateUrl: './package-detail-lists.component.html',
  styleUrls: ['./package-detail-lists.component.scss']
})
export class PackageDetailListsComponent implements OnInit {

  ngOnInit(): void {
  }
   
  constructor(private fb:FormBuilder) {
   
  }

  public dummyObjectExpandedIndex: number;

  /* the following object can be replaced by any JSON response
   * of your backend server
   * but for the sake of simplicity
   * I used this dummy array of objects
   */
  public dummyObjectArray: any = [
    {
      id: 1,
      referenceno: "#5635-777808",
      shippingtype: "Shipping Mailbox",
      receiptno: "002819998328",
      countrydestination: "America",
      statusupdated: "On Delivery",
      statusupdateddate: "12 Jan, 2023",
      statusdelivery: "Received",
      packagelocation: "Boston, USA",
      deliveryoder: 1
    },
    {
      id: 2,
      referenceno: "#5635-342808",
      shippingtype: "Shipping Mailbox",
      receiptno: "872812138328",
      countrydestination: "America",
      statusupdated: "Shipped",
      statusupdateddate: "12 Jun, 2023",
      statusdelivery: "Received",
      packagelocation: "Boston, USA",
      deliveryoder: 1
    }
  ];

  deleteRow(listIndex: number): void {
    const index = this.dummyObjectArray.indexOf(listIndex, 0);
    if (index > -1) {
      this.dummyObjectArray.splice(index, 1);
    }
  }

}
