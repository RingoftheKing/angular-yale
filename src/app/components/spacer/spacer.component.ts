import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spacer',
  standalone: true,
  imports: [],
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.css'
})
export class SpacerComponent {
  @Input() height: string = '20px'; // Default height
  @Input() width: string = '100%';  // Default width
}
