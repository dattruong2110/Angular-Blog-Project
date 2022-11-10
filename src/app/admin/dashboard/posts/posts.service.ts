import { StorageService } from './../../../local-storage/local-storage.service';
import { Injectable } from '@angular/core'
import { Post } from './posts.model';
import { Observable, of, ReplaySubject, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new ReplaySubject<Post[]>();

  private static postListStorageKey = 'Post';

  constructor(private http: HttpClient, storageService: StorageService) { }

  // getData(key: string): any {
  //   return JSON.parse(localStorage.getItem(key)!);
  // }

  // setData(key: string, data: any): void {
  //   return localStorage.setItem(key, JSON.stringify(data));
  // }

  getUpdate() {
    return this.postUpdated.asObservable();
  }

  // getPostList(): Observable<Post[]> {
  //   return of(JSON.parse(window.localStorage.getItem(PostsService.postListStorageKey) || '[]'))
  // }

  addPost(post: Post) {
    return this.http.post<{ message: string }>
      ('http://localhost:3000/api/posts', post)
      .subscribe((response) => {
        this.posts.push(post);
        // window.localStorage.setItem(PostsService.postListStorageKey, JSON.stringify(this.posts));
        this.postUpdated.next([...this.posts]);
      })
  }

  // addPost(post: Post) {
  //   this.getPostList().subscribe(posts => {
  //     posts.push(post);
  //     this.posts = posts;
  //     window.localStorage.setItem(PostsService.postListStorageKey, JSON.stringify(this.posts));
  //     this.postUpdated.next(this.posts);
  //   })
  // }

  getPost() {
    this.http.get<{message: string, posts: Post[]}>
    ('http://localhost:3000/api/posts')
    .subscribe(postData => {
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts])
    })
  }

  // getPost() {
  //   return this.getPostList().subscribe(posts => {
  //     this.postUpdated.next(posts);
  //   });
  // }

  public getPostUpdatedNotifier() {
    return this.postUpdated;
  }
}
