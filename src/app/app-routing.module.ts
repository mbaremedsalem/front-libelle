import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PmComponent } from './pm/pm.component';
import { PpComponent } from './pp/pp.component';

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  // {
  //   path:'inscrire',
  //   component:PageInscriptionComponent
  // },
  {
    path:'',
    component:PageDashboardComponent,
    children:[
      {
        path:'pp',
        component:PpComponent,
      },
      {
        path:'pm',
        component:PmComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
