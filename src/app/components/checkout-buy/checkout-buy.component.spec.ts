import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBuyComponent } from './checkout-buy.component';

describe('CheckoutBuyComponent', () => {
  let component: CheckoutBuyComponent;
  let fixture: ComponentFixture<CheckoutBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
