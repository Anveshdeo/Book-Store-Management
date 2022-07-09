import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './component/featured/featured.component';
import { HomeComponent } from './component/home/home.component';
import { MostviewedComponent } from './component/mostviewed/mostviewed.component';
import { NewarrivalComponent } from './component/newarrival/newarrival.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'featured', component:FeaturedComponent},
  {path:'newarrival', component:NewarrivalComponent},
  {path:'mostviewed', component:MostviewedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
