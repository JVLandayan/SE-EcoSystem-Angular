import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAdminComponent } from './merch-admin.component';

describe('MerchAdminComponent', () => {
  let component: MerchAdminComponent;
  let fixture: ComponentFixture<MerchAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
