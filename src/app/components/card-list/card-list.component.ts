import { Component } from '@angular/core';
import {CardComponent} from '../card/card.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards = [
    { title: 'Happening at SOA', description: 'Check out our events!' },
    { title: 'Community bulletin board', description: 'See what our students have to say' },
    { title: 'Calendars and Newsletters', description: 'View our school calendar and newsletters' },
  ];
}

