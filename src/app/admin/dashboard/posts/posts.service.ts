import { Injectable } from '@angular/core'
import { Post } from './posts.model';
import { Observable, ReplaySubject, Subject } from "rxjs";
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

  // addPost(post: Post) {
  //   return this.http.post<{ message: string }>
  //     ('http://localhost:3000/api/posts', post)
  //     .subscribe((response) => {
  //       this.posts.push(post);
  //       // window.localStorage.setItem(PostsService.postListStorageKey, JSON.stringify(this.posts));
  //       this.postUpdated.next([...this.posts]);
  //     })
  // }

  saveList(): void {
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
  }

  addPost(post: Post) {
    this.posts.push(post);
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
    this.postUpdated.next(this.posts);
  }

  deletePost(key: string) {
    window.localStorage.removeItem(key);
    this.getPost();
    window.localStorage.setItem(PostsService.POST_KEY, JSON.stringify(this.posts));
    // this.postUpdated.next(this.posts);
  }

  // getPost() {
  //   this.http.get<{message: string, posts: Post[]}>
  //   ('http://localhost:3000/api/posts')
  //   .subscribe(postData => {
  //     // this.posts = postData.posts.map(rawPost => ({ ...rawPost, comments: rawPost.comments || [] }));
  //     this.posts = postData.posts;
  //     this.postUpdated.next([...this.posts])
  //   })
  // }

  getPost() {
    this.posts = JSON.parse(window.localStorage.getItem(PostsService.POST_KEY) || '[]');
    this.postUpdated.next(this.posts);
  }

  public getPostUpdatedNotifier() {
    return this.postUpdated;
  }
}
