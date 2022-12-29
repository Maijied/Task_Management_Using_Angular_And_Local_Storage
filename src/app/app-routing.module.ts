import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {InProgressComponent} from "./in-progress/in-progress.component";
import {DoneComponent} from "./done/done.component";
const routes: Routes = [
  {
    path:'',
    component:TodoListComponent,
  },
  {
    path:'todo-list',
    component:TodoListComponent,
  },
  {
    path:'create-task',
    component: CreateTaskComponent,
  },
  {
    path:'in-progress',
    component:InProgressComponent,
  },
  {
    path:'done-task',
    component:DoneComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
