import { PostsService } from './../posts.service';
import { Post } from './../posts.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  public commentForm: FormGroup = new FormGroup({});
  public post: Post[] = [];

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      comment: new FormControl([''])
    })
  }

  public onPostComment() {
    this.post.push({
      comment: this.commentForm.value.comment,
    })
    this.commentForm.reset();
  }

}
