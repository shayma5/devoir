import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:"list",component:ListAnnoncesComponent},
  {path:"cout",component:EstimationCoutComponent},
  {path:"page",component:PageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
