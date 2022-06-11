import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ITodos, StatusTodo } from 'src/app/app.component';
import { HandleListService } from 'src/app/handle-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, DoCheck {

  @Input() todos: ITodos[];
  @Input() counter : number = 0;
  public statusNew : StatusTodo = StatusTodo.NEW;
  public indexChecked : number = 0;

  constructor(private todosService : HandleListService, private cdr: ChangeDetectorRef) { }

  ngDoCheck(): void {
  }


  ngOnInit(): void {

  }

  checkDetec() {
    console.log('check renders');
  }


  moveToDone(index: number): void{
    this.todosService.changeStatus(index , StatusTodo.DONE);
    // this.cdr.detectChanges();
  }

}
