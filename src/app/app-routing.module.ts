import { NgModule            } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent  } from './views/dashboard/dashboard.component';
import { NewComponent } from './views/new/new.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'new',
    component:NewComponent
  },
  {
    path:'edit',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,NewComponent,EditComponent]
