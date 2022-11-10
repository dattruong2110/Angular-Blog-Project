import { Post } from './../posts.model';
import { StorageService } from './../../../../local-storage/local-storage.service';
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

  constructor(public postService: PostsService, private messageService: MessageService, private storageService: StorageService) {
    this.post = storageService.getData(postListStorageKey) || defaultPost;
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(['', Validators.required]),
      content: new FormControl(['', Validators.required]),
      // dateTime: new FormControl(['', Validators.required]),
    })
  }

  savePostList(): void {
    this.storageService.setData(postListStorageKey, this.post);
  };

  onPostAdd() {
    this.postService.addPost({
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      // dateTime: this.postForm.value.dateTime,
    });
    this.postForm.reset();
    this.savePostList();

    this.messageService.add({ severity: 'success', detail: 'Post has been added'});
  }
}
