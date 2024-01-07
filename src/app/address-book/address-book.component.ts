import { Component, OnInit } from '@angular/core';
import { Address } from 'app/shared/models/address.model';
import { AddressBookService } from './address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  radioModel = 'Left';
  UserId: number;
  AddressList: Address[] = [];
  addressSearch: any;
  isAddAddress: boolean = false;

  constructor(private addressBookService: AddressBookService) { }

  async ngOnInit() {
    await this.getAddressBook();
    console.log(this.AddressList)
  }

  async getAddressBook() {
    this.addressBookService
      .getAddressBookbyUserId(this.UserId)
      .toPromise()
      .then((res) => {
        this.AddressList = res;
      });

    //dev only
    this.dataDevOnly();
  }

  addressFilter()
  {
    console.log(this.addressSearch);
    if (this.addressSearch == "")
    {
      this.ngOnInit();
    }
    else
    {
      this.AddressList = this.AddressList.filter(res => {
        return res.AddressName.toLocaleLowerCase().match(this.addressSearch.toLocaleLowerCase());
      });
    }
  }

  addAddressSwitch(event: boolean)
  {
    if (event)
    {
      this.isAddAddress = true;
    }
    else
    {
      this.isAddAddress = false;
    }
  }

  addAddress(newAddres: Address)
  {
    console.log(newAddres)
    this.ngOnInit();
    this.AddressList.push(newAddres);
  }

  showFilter()
  {
    
  }

  checkAmericaFlag(index: number)
  {
    if (this.AddressList[index].Country == "America")
    {
    return true;
    }
    else
    {
      return false;
    }
  }

  checkCanadaFlag(index: number)
  {
    if (this.AddressList[index].Country == "Canada")
    {
    return true;
    }
    else
    {
      return false;
    }
  }

  checkIsPrimary(index: number)
  {
    if (this.AddressList[index].IsPrimary)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  dataDevOnly(){
    this.AddressList =
    [
      {UserId: null, AddressName: "John", StreetName: "Laksana Ave.", City: "Melaweh", PostalCode: "336789", State: "IDN", Country: "America", EmailAddress: "abc@email.com", PhoneNumber: "+12323667889", IsPrimary: true},
      {UserId: null, AddressName: "Dalton", StreetName: "Laksana Ave.", City: "Melaweh", PostalCode: "336789", State: "IDN", Country: "Canada", EmailAddress: "abc@email.com", PhoneNumber: "+12323667889", IsPrimary: false},
      {UserId: null, AddressName: "David", StreetName: "Laksana Ave.", City: "Melaweh", PostalCode: "336789", State: "IDN", Country: "Canada", EmailAddress: "abc@email.com", PhoneNumber: "+12323667889", IsPrimary: false},
      {UserId: null, AddressName: "Jenna", StreetName: "Laksana Ave.", City: "Melaweh", PostalCode: "336789", State: "IDN", Country: "Canada", EmailAddress: "abc@email.com", PhoneNumber: "+12323667889", IsPrimary: false},
      {UserId: null, AddressName: "Nena", StreetName: "Laksana Ave.", City: "Melaweh", PostalCode: "336789", State: "IDN", Country: "America", EmailAddress: "abc@email.com", PhoneNumber: "+12323667889", IsPrimary: false}
    ];
  }

}
