import { Injectable } from '@angular/core';
import { ITodos, StatusTodo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HandleListService {

  public todos: ITodos[] = [
    {text: 'Buy a gold fish.', id:67987 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:97867565 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:54767 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:678675 , status: StatusTodo.NEW},
    {text: 'See a movie with Ben.', id:486769 , status: StatusTodo.DONE}
  ];

  constructor() { }

  public addTodo(item:ITodos): void {
    this.todos.push(item);
  }

  public changeStatus(id: number, status: StatusTodo): void {
    this.todos.find(item=>item.id===id).status = status;
  }
}
