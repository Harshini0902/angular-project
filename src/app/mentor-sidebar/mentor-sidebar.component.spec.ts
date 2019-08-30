import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSidebarComponent } from './mentor-sidebar.component';

describe('MentorSidebarComponent', () => {
  let component: MentorSidebarComponent;
  let fixture: ComponentFixture<MentorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
