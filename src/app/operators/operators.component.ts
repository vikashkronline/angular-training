import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
  filter,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((evt: InputEvent) => evt.target['value']),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        if (val) {
          this.dataSource.next(val);
        }
      });
  }

  clear(input: HTMLInputElement): void {
    this.data = [];
    input.value = '';
    input.focus();
  }
}
