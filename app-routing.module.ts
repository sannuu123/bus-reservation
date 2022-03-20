import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './addbus/addbus.component';
import { BookbusComponent } from './bookbus/bookbus.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { CanclebusComponent } from './canclebus/canclebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { NewbusComponent } from './newbus/newbus.component';
const routes: Routes = [
  {path:'bussearch',component: BussearchComponent},
  {path:'bookbus',component:BookbusComponent},
  {path:'canclebus',component:CanclebusComponent},
  {path:'deletebus',component:DeletebusComponent},
  {path:'addbus',component:AddbusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
