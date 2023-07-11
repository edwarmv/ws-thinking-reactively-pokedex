import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ed-sort-btn',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './sort-btn.component.html',
  styleUrls: ['./sort-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortBtnComponent {

}
