import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { AuthGuard } from './services/auth.guard';
import { AdminAccountComponent } from './views/account/admin-account/admin-account.component';
import { StudentAccountComponent } from './views/account/student-account/student-account.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    canActivate: [AuthGuard],
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    canActivate: [AuthGuard],
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'My Classroom'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'account-admin',
        component: AdminAccountComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'account-student',
        component: StudentAccountComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '**',
    component: P404Component,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
