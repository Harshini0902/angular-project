import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainNavbarComponent } from './plain-navbar.component';

describe('PlainNavbarComponent', () => {
  let component: PlainNavbarComponent;
  let fixture: ComponentFixture<PlainNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
