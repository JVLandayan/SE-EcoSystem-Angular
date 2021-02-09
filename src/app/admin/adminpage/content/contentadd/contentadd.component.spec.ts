import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentaddComponent } from './contentadd.component';

describe('ContentaddComponent', () => {
  let component: ContentaddComponent;
  let fixture: ComponentFixture<ContentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
