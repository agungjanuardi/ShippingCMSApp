import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInformationComponent } from './credit-information.component';

describe('CreditInformationComponent', () => {
  let component: CreditInformationComponent;
  let fixture: ComponentFixture<CreditInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
