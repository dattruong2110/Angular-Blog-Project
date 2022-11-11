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
  @Output() delete = new EventEmitter<number>();

  public postForm!: FormGroup;
  isLike = false;

  constructor() { }

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

  deletePost() {
    this.delete.emit(this.post.id);
  }

  public handleIsLike() {
    this.isLike = this!.isLike;
  }

}
