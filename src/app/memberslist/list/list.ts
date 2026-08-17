import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; /* Brauchen wir für Http Anbindungen */

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}
/* OnInit holt beim ersten Laden der Komponente die Daten (statt dem Constructor) */
  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    /* Subscribe ist notwendig, da HttPClient ein "Observable" zurückgibt. 
    Daten kommen Asynchron an und subscribe arbeitet damit */
      .subscribe(data => {
        this.users = data;
      });
  }
}