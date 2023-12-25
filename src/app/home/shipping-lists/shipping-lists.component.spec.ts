import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingListsComponent } from './shipping-lists.component';

describe('ShippingListsComponent', () => {
  let component: ShippingListsComponent;
  let fixture: ComponentFixture<ShippingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
