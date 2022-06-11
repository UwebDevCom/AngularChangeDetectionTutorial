import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodos, StatusTodo } from 'src/app/app.component';
import { HandleListService } from 'src/app/handle-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnChanges{

  todos: Observable<ITodos[]>;
  @Input() counter : number = 0;
  public statusNew : StatusTodo = StatusTodo.NEW;
  public indexChecked : number = 0;

  constructor(private todosService : HandleListService) { }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodosByStatus(StatusTodo.NEW);
  }

  moveToDone(index: number): void {
    this.todosService.changeStatus(index , StatusTodo.DONE);   
  }
}
