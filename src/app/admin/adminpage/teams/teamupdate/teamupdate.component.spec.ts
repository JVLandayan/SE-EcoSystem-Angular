import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamupdateComponent } from './teamupdate.component';

describe('TeamupdateComponent', () => {
  let component: TeamupdateComponent;
  let fixture: ComponentFixture<TeamupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
