import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ed-search-bar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {

}
