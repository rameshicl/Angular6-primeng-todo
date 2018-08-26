import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomessagesComponent } from './todomessages.component';

describe('TodomessagesComponent', () => {
  let component: TodomessagesComponent;
  let fixture: ComponentFixture<TodomessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodomessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
