import { Routes } from '@angular/router';
import {EditComponent} from './user/edit/edit.component';
import {CreateComponent} from './user/create/create.component';
import {ViewComponent} from './user/view/view.component';
import {IndexComponent} from './user/index/index.component';

export const routes: Routes = [
  { path: 'user', redirectTo: '', pathMatch: 'full'},
  { path: '', component: IndexComponent },
  { path: 'user/:userId/view', component: ViewComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:userId/edit', component: EditComponent }
];
