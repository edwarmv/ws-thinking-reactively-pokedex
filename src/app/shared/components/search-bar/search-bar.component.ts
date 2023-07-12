import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'ed-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SearchBarComponent,
    },
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements ControlValueAccessor {
  termControl = new FormControl('', { nonNullable: true });
  onChange?: (value: string) => {};
  onTouced?: () => void;
  constructor() {
    this.termControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        if (!this.onChange) return;
        this.onChange(value);
      });
  }
  writeValue(value: string): void {
    this.termControl.setValue(value);
  }
  registerOnChange(fn: (value: string) => {}): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouced = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.termControl.disable();
    } else {
      this.termControl.enable();
    }
  }
}
