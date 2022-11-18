import { PostsService } from './../posts.service';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  // @Output() delete: EventEmitter<Post> = new EventEmitter();
  @Output() delete = new EventEmitter<string>();

  public postForm!: FormGroup;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
  }

  onEdit() {
    // this.postForm.controls['title'].setValue(post.title);
    // this.postForm.controls['content'].setValue(post.content);
    // this.updateIndex = idx;
    // this.isEditEnabled = true;
    this.post.inEdit = true;
  }

  updatePost() {
    this.post.title = this.postForm.value.title;
    this.post.content = this.postForm.value.content;
    this.post.inEdit = false;
  }

  handleIsLike() {
    this.post.isLike = this.post.isLike + 1;
    this.postService.saveList();
  }
}
