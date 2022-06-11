import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodos, StatusTodo } from './app.component';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HandleListService {

   private todosSub : BehaviorSubject<ITodos[]> = new BehaviorSubject<ITodos[]>(null);
   todos$ : Observable<ITodos[]> = this.todosSub.asObservable(); 

  public todos: ITodos[] = [
    {text: 'Buy a gold fish.', id:67987 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:97867565 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:54767 , status: StatusTodo.NEW},
    {text: 'To make the laundry.', id:678675 , status: StatusTodo.NEW},
    {text: 'See a movie with Ben.', id:486769 , status: StatusTodo.DONE}
  ];

  constructor() { }

  init() {
    this.todosSub.next(this.todos);
  }
  public addTodo(item:ITodos): void {
    this.todos.push(item);
    this.todosSub.next(this.todos);
  }

  public changeStatus(id: number, status: StatusTodo): void {
    this.todos.find(item=>item.id===id).status = status;
    this.todosSub.next(this.todos);
  }

  public getTodosByStatus(status:StatusTodo):Observable<ITodos[]> {
    return this.todos$.pipe(map(items=>items.filter(item=>item.status===status)));
  }
}
