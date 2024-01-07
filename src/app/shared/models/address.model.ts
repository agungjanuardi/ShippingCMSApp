export class Address {
    UserId: number;
    AddressName: string;
    StreetName: string;
    City: string;
    PostalCode: string;
    State: string;
    Country: string;
    EmailAddress: string;
    PhoneNumber: string;
    IsPrimary: boolean;
    constructor(Address) {
        {
          this.UserId = null;
          this.AddressName = '';
          this.StreetName = '';
          this.City = '';
          this.PostalCode = '';
          this.State = '';
          this.Country = '';
          this.EmailAddress = '';
          this.PhoneNumber = '';
          this.IsPrimary = false;
        }
    }
}