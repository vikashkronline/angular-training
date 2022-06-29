import { Component, OnInit } from '@angular/core';
import { CustomObservable } from '../Observable/observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  myObservable = new CustomObservable();

  data: any[] = [];

  constructor() {}

  ngOnInit() {
    this.myObservable.subscribe((data) => {
      this.data.push(data);
    });
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.myObservable.next(input.value);
      input.value = '';
    }
  }
}
