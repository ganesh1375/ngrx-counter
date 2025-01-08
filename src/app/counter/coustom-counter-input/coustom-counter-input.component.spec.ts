import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomCounterInputComponent } from './coustom-counter-input.component';

describe('CoustomCounterInputComponent', () => {
  let component: CoustomCounterInputComponent;
  let fixture: ComponentFixture<CoustomCounterInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoustomCounterInputComponent]
    });
    fixture = TestBed.createComponent(CoustomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
