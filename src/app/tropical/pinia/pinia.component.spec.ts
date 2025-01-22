import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiniaComponent } from './pinia.component';

describe('PiniaComponent', () => {
  let component: PiniaComponent;
  let fixture: ComponentFixture<PiniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
