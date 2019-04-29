import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPaneComponent } from './button-pane.component';

describe('ButtonPaneComponent', () => {
  let component: ButtonPaneComponent;
  let fixture: ComponentFixture<ButtonPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
