import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ITodos, StatusTodo } from 'src/app/app.component';
import { HandleListService } from 'src/app/handle-list.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneListComponent implements OnInit{
  
  @Input() todos: ITodos[];
  public statusDone : StatusTodo = StatusTodo.DONE;
  constructor(private todosService : HandleListService, private cdr: ChangeDetectorRef) { }
  
  ngOnInit(): void {
  }

  moveToDo(index: number): void{
    this.todosService.changeStatus(index, StatusTodo.NEW);
  }
}
