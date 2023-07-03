import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPositionComponent } from './all-position.component';

describe('AllPositionComponent', () => {
  let component: AllPositionComponent;
  let fixture: ComponentFixture<AllPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
