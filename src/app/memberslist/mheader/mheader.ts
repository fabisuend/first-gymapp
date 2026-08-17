import { Component } from '@angular/core';
import { List } from '../list/list'; /* Anbindung von weiteren Elementen notwendig */

@Component({
  selector: 'app-mheader',
  imports: [List],
  templateUrl: './mheader.html',
  styleUrl: './mheader.css',
})
export class Mheader {}
