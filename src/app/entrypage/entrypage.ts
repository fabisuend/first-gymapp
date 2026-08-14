import { Component } from '@angular/core';
import { Header } from './header/header';
import { Addbanner } from './addbanner/addbanner';

@Component({
  selector: 'app-entrypage',
  imports: [Header, Addbanner],
  templateUrl: './entrypage.html',
  styleUrl: './entrypage.css',
})
export class Entrypage {}