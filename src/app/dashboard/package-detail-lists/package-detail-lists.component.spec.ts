import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDetailListsComponent } from './package-detail-lists.component';

describe('PackageDetailListsComponent', () => {
  let component: PackageDetailListsComponent;
  let fixture: ComponentFixture<PackageDetailListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageDetailListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageDetailListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
