import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ed-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent {
  @Input({ required: true })
  name!: string;

  @Input({ required: true })
  order!: number;

  @Input({ required: true })
  imgSrc!: string;
}
