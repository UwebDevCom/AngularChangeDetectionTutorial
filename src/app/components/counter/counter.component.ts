import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  @Input() counter : number;
  constructor() { }

  ngOnInit(): void {
  }

  checkDetec() {
    console.log('check renders');
  }
}
