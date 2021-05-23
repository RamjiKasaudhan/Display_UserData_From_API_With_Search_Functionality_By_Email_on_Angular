import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCards2Component } from './user-cards2.component';

describe('UserCards2Component', () => {
  let component: UserCards2Component;
  let fixture: ComponentFixture<UserCards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCards2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
