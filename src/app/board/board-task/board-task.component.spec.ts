import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTaskComponent } from './board-task.component';

describe('BoardTaskComponent', () => {
  let component: BoardTaskComponent;
  let fixture: ComponentFixture<BoardTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
