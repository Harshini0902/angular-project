import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCommissionComponent } from './change-commission.component';

describe('ChangeCommissionComponent', () => {
  let component: ChangeCommissionComponent;
  let fixture: ComponentFixture<ChangeCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
