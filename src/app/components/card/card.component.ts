import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-example-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}

