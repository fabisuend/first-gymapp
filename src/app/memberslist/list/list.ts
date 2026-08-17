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


/* da wir in app.config.ts provideHttPClient() haben, erstellt Angular automatisch eine zentral verwaltete Instanz
private erzeugt eine Klassen-property, die via "this" genutzt werden kann 
contructor intialisert den ganzen Spaß*/
/* OnInit holt beim ersten Laden der Komponente die Daten => GET-Anfrage (statt dem Constructor) */
/* Subscribe ist notwendig, da HttPClient (nur) ein "Observable" zurückgibt (Obeservabel = "Wenn du willst, kann ich dir irgendwann Daten liefern, aber nur, wenn du mich aktivierst."). 
subscribe abonniert, das observable und ordnet die Get-Anfrage an */
/* Nach Serverantwort erhalten wir das Array, welches in data verpackt wird */
/* this.users = data weist dann die Daten der Klassen-Property users zu */

/* NICHT BEST PRACTICE */
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }
}
/* TLDR: private http: HttpClient:
Angular braucht eine List-Instanz (weil <app-list> im Template steht)
  → Angular schaut in den Constructor: "Ah, HttpClient wird gebraucht"
    → Angular holt seine zentrale, globale HttpClient-Instanz
      → Angular ruft new List(httpClientInstanz) auf
        → Parameter "http" (im Constructor) bekommt diese Instanz
          → this.http = http; speichert sie dauerhaft in der Klasse
            → this.http ist jetzt überall in der Klasse (z.B. ngOnInit) nutzbar */

/* TLDR ngOnInit-Datenfluss:
Komponente wird erstellt 
  → ngOnInit() läuft 
    → http.get() erstellt Observable (aber sendet noch nichts) 
      → subscribe() aktiviert die Anfrage, sendet sie ab 
        → (Wartezeit, Code läuft in der Zwischenzeit normal weiter)
          → Antwort kommt an → Callback-Funktion wird ausgeführt 
            → this.users wird befüllt 
              → Angular erkennt Änderung → Template wird neu gerendert */


/* Services Ordner
    -> Member Service (NUR für CRUD-Operationen und Ergebnis in die jeweilige Komponente einfügen) */