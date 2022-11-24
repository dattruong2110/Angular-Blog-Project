import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';

import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostEditComponent } from './admin/dashboard/posts/post-edit/post-edit.component';
import { PostCommentComponent } from './admin/dashboard/posts/post-comment/post-comment.component';
import { PostComponent } from './admin/dashboard/posts/post/post.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { BadgeModule } from 'primeng/badge';
import { CommentComponent } from './admin/dashboard/posts/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    PostCreateComponent,
    PostListComponent,
    PostEditComponent,
    PostCommentComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    SidebarModule,
    ToolbarModule,
    MenuModule,
    InputTextModule,
    CardModule,
    AccordionModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToggleButtonModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
