import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css'],
})
export class RxjsPracticeComponent implements OnInit {
  mySubject = new Subject();
  data: any[] = [];

  subscription;

  constructor() {}

  ngOnInit() {
    this.subscribe();
  }

  subscribe(): void {
    this.subscription = this.mySubject.subscribe((data) => {
      this.data.push(data);
    });
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.mySubject.next(input.value);
      input.value = '';
    }
    input.focus();
  }
}
