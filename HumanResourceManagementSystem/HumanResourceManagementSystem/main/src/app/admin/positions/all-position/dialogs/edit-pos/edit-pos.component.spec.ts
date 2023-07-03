import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPosComponent } from './edit-pos.component';

describe('EditPosComponent', () => {
  let component: EditPosComponent;
  let fixture: ComponentFixture<EditPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
