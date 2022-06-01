import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentPlanComponent } from './list-payment-plan.component';

describe('ListPaymentPlanComponent', () => {
  let component: ListPaymentPlanComponent;
  let fixture: ComponentFixture<ListPaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
