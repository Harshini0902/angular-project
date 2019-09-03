import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAndSidebarLayoutComponent } from './navbar-and-sidebar-layout.component';

describe('NavbarAndSidebarLayoutComponent', () => {
  let component: NavbarAndSidebarLayoutComponent;
  let fixture: ComponentFixture<NavbarAndSidebarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAndSidebarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAndSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
