import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { JobComponent } from './job/job.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateJobComponent } from './job/create-job/create-job.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'job', component: JobComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'create-job', component: CreateJobComponent},
  { path: 'update-job/:id', component: CreateJobComponent},
  { path: 'update-user/:id', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
