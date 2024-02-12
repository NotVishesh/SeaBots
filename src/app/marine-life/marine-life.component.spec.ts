import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineLifeComponent } from './marine-life.component';

describe('MarineLifeComponent', () => {
  let component: MarineLifeComponent;
  let fixture: ComponentFixture<MarineLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarineLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
