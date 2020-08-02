import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonCmpComponent } from './common-cmp/common-cmp.component';


const routes: Routes = [
  {path:'Employee/:Name', component:CommonCmpComponent},
  {path:'Student/:Name', component:CommonCmpComponent},
  {path:'Dept/:Name', component:CommonCmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
