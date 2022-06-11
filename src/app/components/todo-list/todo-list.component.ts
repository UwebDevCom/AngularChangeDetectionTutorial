import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITodos, StatusTodo } from 'src/app/app.component';
import { HandleListService } from 'src/app/handle-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnChanges{

  @Input() todos: ITodos[];
  @Input() counter : number = 0;
  public statusNew : StatusTodo = StatusTodo.NEW;
  public indexChecked : number = 0;

  constructor(private todosService : HandleListService) { }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit(): void {}

  moveToDone(index: number): void {
    this.todosService.changeStatus(index , StatusTodo.DONE);
  }
}
