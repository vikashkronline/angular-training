import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  dataSource = new Subject();
  // dataSource = of(1, 2, 3, 4, 5, 6);

  data: any[] = [];

  subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.dataSource
      .pipe(
        filter((n): n is number => {
          const num = Number(n);
          if (!isNaN(num)) {
            return num % 2 === 0;
          }
          return true;
        })
      )
      .subscribe((data) => {
        this.data.push(data);
      });
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.dataSource.next(input.value);
      input.value = '';
    }
    input.focus();
  }

  clear(input: HTMLInputElement): void {
    this.data = [];
    input.value = '';
    input.focus();
  }
}
