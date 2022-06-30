import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  subject = new Subject();
  data: any[] = [];

  subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.subject
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

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.subject.next(input.value);
      input.value = '';
    }
    input.focus();
  }
}
