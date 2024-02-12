import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinePollutionComponent } from './marine-pollution.component';

describe('MarinePollutionComponent', () => {
  let component: MarinePollutionComponent;
  let fixture: ComponentFixture<MarinePollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarinePollutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarinePollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
