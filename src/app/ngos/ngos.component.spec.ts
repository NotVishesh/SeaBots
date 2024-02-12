import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosComponent } from './ngos.component';

describe('NgosComponent', () => {
  let component: NgosComponent;
  let fixture: ComponentFixture<NgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
