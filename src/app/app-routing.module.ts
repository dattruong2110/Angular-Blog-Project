import { PostEditComponent } from './admin/dashboard/posts/post-edit/post-edit.component';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
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
      {
        path: 'posts',
        component: PostListComponent,
        children: [
          {
            path: 'edit/:id',
            component: PostEditComponent,
          }
        ]
     }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
