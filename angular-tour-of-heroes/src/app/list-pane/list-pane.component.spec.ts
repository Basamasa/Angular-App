import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaneComponent } from './list-pane.component';

describe('ListPaneComponent', () => {
  let component: ListPaneComponent;
  let fixture: ComponentFixture<ListPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
