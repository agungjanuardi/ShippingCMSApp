import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressConfirmationComponent } from './address-confirmation.component';

describe('AddressConfirmationComponent', () => {
  let component: AddressConfirmationComponent;
  let fixture: ComponentFixture<AddressConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
