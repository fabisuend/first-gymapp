import { Routes } from '@angular/router';
import { Mheader } from './memberslist/mheader/mheader'; /* schauen, wo es hingehen soll */
import { Entrypage } from './entrypage/entrypage';

export const routes: Routes = [
  { path: '', component: Entrypage },
  { path: 'mitglieder', component: Mheader },
];
