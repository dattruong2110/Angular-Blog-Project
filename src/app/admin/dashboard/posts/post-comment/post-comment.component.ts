import { PostsService } from './../posts.service';
import { Comment, Post } from './../posts.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  @Input() post: Post;

  public commentForm: FormGroup = new FormGroup({});

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      comment: new FormControl([''])
    })
  }

  onPostComment() {
    const newComment = new Comment();
    newComment.content = this.commentForm.value.comment;
    this.post.comments.push(newComment);
    this.postService.saveList();
    this.commentForm.reset();
  }

}
