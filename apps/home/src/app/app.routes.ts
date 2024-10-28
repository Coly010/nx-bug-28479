import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'mf2',
    loadChildren: () =>
      loadRemoteModule('mf2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mf1',
    loadChildren: () =>
      loadRemoteModule('mf1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
