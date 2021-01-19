import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudieschuldTokenComponent } from './studieschuld-token.component';

describe('StudieschuldTokenComponent', () => {
  let component: StudieschuldTokenComponent;
  let fixture: ComponentFixture<StudieschuldTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudieschuldTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudieschuldTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
