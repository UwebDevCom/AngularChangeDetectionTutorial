import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITodos, StatusTodo } from 'src/app/app.component';
import { HandleListService } from 'src/app/handle-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent implements OnInit {

  public newToDo : string = null;
  constructor(private todosService : HandleListService) { }

  ngOnInit(): void {
  }

  public addTodo() : void {
    const newTodo : ITodos = {text: this.newToDo , id: Math.random()*1356, status: StatusTodo.NEW};
    this.newToDo = null;
    this.todosService.addTodo(newTodo);
  }

}
