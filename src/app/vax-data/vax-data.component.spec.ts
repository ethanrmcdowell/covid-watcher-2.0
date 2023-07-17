import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxDataComponent } from './vax-data.component';

describe('VaxDataComponent', () => {
  let component: VaxDataComponent;
  let fixture: ComponentFixture<VaxDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaxDataComponent]
    });
    fixture = TestBed.createComponent(VaxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
