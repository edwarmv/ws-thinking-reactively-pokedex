import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { SortBtnComponent } from './shared/components/sort-btn/sort-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, IconComponent, SortBtnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ws-thinking-reactively-pokedex';
}
