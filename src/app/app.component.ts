import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {HeaderComponent} from './components/header/header.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {AboutComponent} from './components/about/about.component';
import {SpacerComponent} from './components/spacer/spacer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardListComponent, HeaderComponent, CarouselComponent, AboutComponent, SpacerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-yale';
}
