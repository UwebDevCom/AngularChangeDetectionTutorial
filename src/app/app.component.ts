import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HandleListService } from './handle-list.service';


export enum StatusTodo {
  NEW,
  DONE
}
export interface ITodos {
  text: string;
  id: number;
  status: StatusTodo
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck, AfterViewChecked, OnDestroy {
  
  public todos: ITodos[];
  public counter: number = 0;
  public timer : ReturnType<typeof setTimeout> = null;
  public time : string = new Date().toLocaleTimeString();

  constructor(private todosService : HandleListService, private cdr:ChangeDetectorRef){};
 
  ngDoCheck() {
   if(this.counter < this.todos.length) {
      this.todos = this.todosService.todos;
    }
  };

  ngOnInit(){
    this.todosService.init(); 
    this.todos = this.todosService.todos

    this.timer = setInterval(()=> {
      this.time = new Date().toLocaleTimeString();
      this.cdr.detectChanges();
    }, 1000);
  }
  ngAfterViewChecked(): void{
    this.counter = this.todos.length;
  }

  
  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
