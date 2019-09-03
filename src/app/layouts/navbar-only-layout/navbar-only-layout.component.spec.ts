import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOnlyLayoutComponent } from './navbar-only-layout.component';

describe('NavbarOnlyLayoutComponent', () => {
  let component: NavbarOnlyLayoutComponent;
  let fixture: ComponentFixture<NavbarOnlyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOnlyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOnlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
