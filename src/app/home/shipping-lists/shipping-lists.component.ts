import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-lists',
  templateUrl: './shipping-lists.component.html',
  styleUrls: ['./shipping-lists.component.scss']
})
export class ShippingListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    },
    {
      id: 3,
      referenceno: "#5635-666608",
      shippingtype: "Shipping Mailbox",
      receiptno: "872000138310",
      countrydestination: "America",
      statusupdated: "Shipped",
      statusupdateddate: "12 Dec, 2023",
      statusdelivery: "Received",
      packagelocation: "Philadelphia, USA",
      deliveryoder: 1
    }
  ];

  expandOrCollapseRow(listIndex: number): void {
    const dummyObj = this.dummyObjectArray[listIndex];

    // reset (collapses all objects in the array)
    this.dummyObjectArray = this.dummyObjectArray.map(dummyObject => ({
      ...dummyObject,
      expanded: false
    }));

    // expands only the dummyObject clicked
    this.dummyObjectArray[listIndex] = {
      ...dummyObj,
      expanded: !dummyObj.expanded
    }
  }

}
