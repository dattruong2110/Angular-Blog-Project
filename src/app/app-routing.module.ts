import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DefaultComponent } from './admin/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
