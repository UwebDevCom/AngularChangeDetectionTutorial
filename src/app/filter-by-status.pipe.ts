import { Pipe, PipeTransform } from '@angular/core';
import { ITodos, StatusTodo } from './app.component';

@Pipe({
  name: 'filterByStatus',
  pure: false
})
export class FilterByStatusPipe implements PipeTransform {
  transform(value: ITodos[], byStatus: StatusTodo): ITodos[] {
    return value.filter(item => item.status === byStatus);
  }

}
