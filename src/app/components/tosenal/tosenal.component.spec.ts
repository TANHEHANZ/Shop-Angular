import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TosenalComponent } from './tosenal.component';

describe('TosenalComponent', () => {
  let component: TosenalComponent;
  let fixture: ComponentFixture<TosenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TosenalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TosenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
