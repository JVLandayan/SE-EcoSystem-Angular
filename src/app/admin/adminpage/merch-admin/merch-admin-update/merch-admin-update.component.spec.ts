import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAdminUpdateComponent } from './merch-admin-update.component';

describe('MerchAdminUpdateComponent', () => {
  let component: MerchAdminUpdateComponent;
  let fixture: ComponentFixture<MerchAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchAdminUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
