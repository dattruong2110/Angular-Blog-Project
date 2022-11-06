import { PostsService } from './../posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  ngForm: NgForm;
  updateIndex!: any;
  private postsSub!: Subscription;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPost();
    this.postsSub = this.postService.getUpdate().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  // onEdit(posts: Post, idx: number) {
  //   this.ngForm.controls['title'].setValue(posts.title);
  //   this.ngForm.controls['content'].setValue(posts.content);
  //   this.updateIndex = idx;
  // }

  // updatePost() {
  //   this.posts[this.updateIndex].title = this.ngForm.value.title;
  //   this.posts[this.updateIndex].content = this.ngForm.value.content;
  //   this.updateIndex = undefined;
  // }

  deletePost(idx: number) {
    this.posts.splice(idx, 1);
  }
}
