import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguacateComponent } from './aguacate.component';

describe('AguacateComponent', () => {
  let component: AguacateComponent;
  let fixture: ComponentFixture<AguacateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AguacateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguacateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
