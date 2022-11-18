import { PostsService } from './../posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  providers: [MessageService],
})
export class PostEditComponent implements OnInit {

  // @Input("post") public post!: Post;
  public post!: Post;

  @Input("post")
  set postReceiver(value: Post) {
    this.post = value;
    this.editFrom.setControl('title', new FormControl(value.title, [Validators.required]));
    this.editFrom.setControl('content', new FormControl(value.content, [Validators.required]));
  };

  public editFrom: FormGroup = new FormGroup({});

  constructor(public postService: PostsService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  public savePost() {
    this.post.title = this.editFrom?.value.title;
    this.post.content = this.editFrom?.value.content;

    this.post.inEdit = false;
    this.postService.saveList();
    this.messageService.add({ severity: 'success', detail: 'Post has been edited' });
    // this.post.title = this.editFrom?.controls['title'].value;
    // this.post.content = this.editFrom?.controls['content'].value;
  }

}
