import { Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    component: UserProfilesComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'user-add',
    component: UserAddComponent,
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
  },
];
