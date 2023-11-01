import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStatsComponent } from './checkout-stats.component';

describe('CheckoutStatsComponent', () => {
  let component: CheckoutStatsComponent;
  let fixture: ComponentFixture<CheckoutStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutStatsComponent]
    });
    fixture = TestBed.createComponent(CheckoutStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
