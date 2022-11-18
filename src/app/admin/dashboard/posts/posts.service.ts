import { Injectable } from '@angular/core'
import { Post } from './posts.model';
import { ReplaySubject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new ReplaySubject<Post[]>();

  private static readonly POST_KEY = 'POSTS';

  constructor(private http: HttpClient) { }

  getUpdate() {
    return this.postUpdated.asObservable();
  }

  saveList(): void {
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
  }

  addPost(post: Post) {
    this.posts.push(post);
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
    this.postUpdated.next(this.posts);
  }

  deletePost(id: string) {
    this.getPost();
    this.posts = this.posts.filter(post => post.id !== id);
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
    this.postUpdated.next(this.posts);
  }

  getPost() {
    this.posts = JSON.parse(window.localStorage.getItem(PostsService.POST_KEY) || '[]');
    this.postUpdated.next(this.posts);
  }

  public getPostUpdatedNotifier() {
    return this.postUpdated;
  }
}
