import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAdminAddComponent } from './merch-admin-add.component';

describe('MerchAdminAddComponent', () => {
  let component: MerchAdminAddComponent;
  let fixture: ComponentFixture<MerchAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchAdminAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
