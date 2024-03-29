import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  submitted: boolean = false;
  AddressForm:FormGroup;
  Countries: any = ['America', 'Canada']
  @Output() newAddressEvent = new EventEmitter<any>();
  @Output() addAddressEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initiateAddressForm();
  }

  initiateAddressForm()
  {
    this.AddressForm = this.fb.group({
      UserId: [null],
      AddressName: ['', [Validators.required]],
      StreetName: ['', [Validators.required]],
      City: ['', [Validators.required]],
      PostalCode: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
      IsPrimary: [false]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.AddressForm.controls;
  }

  cancelAddAddressForm()
  {
    this.submitted = false;
    this.addAddressEvent.emit(false);
    this.AddressForm.reset();
  }

  updateValueAddressForm()
  {
    this.submitted = true;
    console.log(this.AddressForm)
    if (this.AddressForm.invalid) {
      return;
    }
    this.newAddressEvent.emit(this.AddressForm.value);
    this.addAddressEvent.emit(false);
    this.AddressForm.reset();
  }

}
