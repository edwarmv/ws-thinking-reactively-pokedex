import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icon-name.enum';
import { BehaviorSubject, tap } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ed-sort-btn',
  standalone: true,
  imports: [CommonModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SortBtnComponent,
    },
  ],
  templateUrl: './sort-btn.component.html',
  styleUrls: ['./sort-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortBtnComponent implements ControlValueAccessor {
  onChange?: (value: string) => {};

  orderByOpts: {
    none: keyof typeof IconName;
    name: keyof typeof IconName;
    order: keyof typeof IconName;
  } = {
    none: 'Sort',
    name: 'TextFormat',
    order: 'Tag',
  };

  orderByOptsValues = Object.entries(this.orderByOpts);

  orderByOptsValuesIndex = 0;

  private _orderBySubject = new BehaviorSubject<keyof typeof IconName>(
    this.orderByOptsValues[this.orderByOptsValuesIndex][1],
  );

  orderBy$ = this._orderBySubject.asObservable();

  @HostListener('click')
  onClick() {
    this.orderByOptsValuesIndex++;
    if (this.orderByOptsValuesIndex === this.orderByOptsValues.length) {
      this.orderByOptsValuesIndex = 0;
    }
    this._orderBySubject.next(
      this.orderByOptsValues[this.orderByOptsValuesIndex][1],
    );
    if (this.onChange) {
      this.onChange(this.orderByOptsValues[this.orderByOptsValuesIndex][0]);
    }
  }

  writeValue(): void {}

  registerOnChange(fn: (value: string) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(): void {}
}
