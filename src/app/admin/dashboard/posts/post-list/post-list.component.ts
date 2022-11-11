import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './../posts.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [MessageService],
})
export class PostListComponent implements OnInit, OnDestroy {

  public postForm!: FormGroup;
  @Input() post: Post;
  @Input() delete = new EventEmitter<number>();

  posts: Post[] = [];
  currentPost = this.posts[0];
  isEditEnabled: boolean = false;
  private postsSub!: Subscription;
  private postUpdateNotifier: Subject<Post[]>;

  constructor(public postService: PostsService, private messageService: MessageService) {
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

  handleDeletePost(id: number) {
    // this.delete.emit(this.post.id);
    this.posts = this.posts.filter(post => {
      return post.id !== id;
    });

    if (this.currentPost.id === id) {
      this.currentPost = this.posts[0];
    }

    this.messageService.add({ severity: 'success', detail: 'Post has been deleted' });
  }
}
