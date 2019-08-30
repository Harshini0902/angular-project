import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTechnologyComponent } from './admin-edit-technology.component';

describe('AdminEditTechnologyComponent', () => {
  let component: AdminEditTechnologyComponent;
  let fixture: ComponentFixture<AdminEditTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
