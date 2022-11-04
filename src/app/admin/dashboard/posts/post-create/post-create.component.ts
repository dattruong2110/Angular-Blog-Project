import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
  }

  onPostAdd(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.postService.addPost(form.value.title, form.value.content, form.value.dateTime);
    form.resetForm();
  }
}
