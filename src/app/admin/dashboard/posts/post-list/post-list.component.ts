import { Subject } from 'rxjs';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './../posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  public postForm!: FormGroup;
  posts: Post[] = [];
  updateIndex!: any;
  isEditEnabled: boolean = false;
  private postsSub!: Subscription;
  private postUpdateNotifier: Subject<Post[]>;

  constructor(public postService: PostsService) {
    this.postUpdateNotifier = this.postService.getPostUpdatedNotifier();
  }

  ngOnInit(): void {
    if (this.postForm) {
      this.postForm = new FormGroup({
        title: new FormControl(['', Validators.required]),
        content: new FormControl(['', Validators.required])
      })
    }

    this.postService.getPost();

    this.postUpdateNotifier.subscribe(updatedPosts => this.posts = updatedPosts);
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  onEdit(post: Post) {
    // this.postForm.controls['title'].setValue(post.title);
    // this.postForm.controls['content'].setValue(post.content);
    // this.updateIndex = idx;
    // this.isEditEnabled = true;
    post.inEdit = true;
  }

  updatePost() {
    this.posts[this.updateIndex].title = this.postForm.value.title;
    this.posts[this.updateIndex].content = this.postForm.value.content;
    this.updateIndex = undefined;
    this.isEditEnabled = false;
  }

  deletePost(idx: number) {
    this.posts.splice(idx, 1);
  }
}
