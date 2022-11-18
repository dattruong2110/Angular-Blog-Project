import { Post } from './../posts.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

const postListStorageKey = 'Post';

const defaultPost = [''];

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  providers: [MessageService]
})
export class PostCreateComponent implements OnInit {

  public postForm!: FormGroup;
  post: Post[] = [];

  constructor(public postService: PostsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(['', Validators.required]),
      content: new FormControl(['', Validators.required]),
    })
  }

  onPostAdd() {
    this.postService.addPost(new Post(this.postForm.value.title, this.postForm.value.content));
    this.postForm.reset();

    this.messageService.add({ severity: 'success', detail: 'Post has been added'});
  }
}
