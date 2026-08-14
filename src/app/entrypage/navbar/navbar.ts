import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; /* Notwending um die Navbar auch wirklich zu nutzen und links dahinter zu haben */
/* Routerlink und Routerlinkactive sind notwendig, damit die Navbar ihre Komponenten selbst auflistet */


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}