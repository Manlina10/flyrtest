import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, CardsComponent, ImageTextComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flyrtest';
}
