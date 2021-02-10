import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesmultipleComponent } from './articlesmultiple.component';

describe('ArticlesmultipleComponent', () => {
  let component: ArticlesmultipleComponent;
  let fixture: ComponentFixture<ArticlesmultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesmultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
