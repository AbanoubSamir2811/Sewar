import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardShopsComponent } from './shop-card-shops.component';

describe('ShopCardShopsComponent', () => {
  let component: ShopCardShopsComponent;
  let fixture: ComponentFixture<ShopCardShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCardShopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCardShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
