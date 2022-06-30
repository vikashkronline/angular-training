import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css'],
})
export class RxjsPracticeComponent implements OnInit {
  subject = new Subject();
  behaviorSubject = new BehaviorSubject('');
  replaySubject = new ReplaySubject(10);
  dataSource = this.subject;
  data: any[] = [];

  subscription;

  constructor() {}

  ngOnInit() {
    this.subscribe();
  }

  subscribe(): void {
    this.subscription = this.dataSource
      /* .pipe(
        filter((n): n is string => {
          const num = Number(n);
          if (!isNaN(num)) {
            return num % 2 === 0;
          }
          return true;
        })
      ) */
      .subscribe((data) => {
        this.data.push(data);
      });
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.dataSource.next(input.value);
      input.value = '';
    }
    input.focus();
  }

  changeSource(select: HTMLSelectElement): void {
    if (select.value === 's') {
      this.dataSource = this.subject;
    } else if (select.value === 'b') {
      this.dataSource = this.behaviorSubject;
    } else {
      this.dataSource = this.replaySubject;
    }
    this.unsubscribe();
    this.subscribe();
  }
}
