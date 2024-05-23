import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPmComponent } from './add-pm.component';

describe('AddPmComponent', () => {
  let component: AddPmComponent;
  let fixture: ComponentFixture<AddPmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPmComponent]
    });
    fixture = TestBed.createComponent(AddPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
