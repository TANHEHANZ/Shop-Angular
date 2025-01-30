import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidireccionalComponent } from './bidireccional.component';

describe('BidireccionalComponent', () => {
  let component: BidireccionalComponent;
  let fixture: ComponentFixture<BidireccionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidireccionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
