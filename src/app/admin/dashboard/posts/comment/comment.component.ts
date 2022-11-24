import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() currentComment: Comment;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
  }

  handleCountLikeCmt() {
    this.currentComment.likeCount = this.currentComment.likeCount + 1;
    this.postService.saveList();
  }

}
