import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAdminListComponent } from './merch-admin-list.component';

describe('MerchAdminListComponent', () => {
  let component: MerchAdminListComponent;
  let fixture: ComponentFixture<MerchAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
