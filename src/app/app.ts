import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Jose Zapata';
}
