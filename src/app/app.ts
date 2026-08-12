import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Addbanner} from './addbanner/addbanner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Addbanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gymapp');
}



/* SAVE */
/* THE */
/* GODDAMN */
/* FILE */
/* YOU */
/* DUMB */
/* FUCK */