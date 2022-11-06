import { Injectable } from '@angular/core'
import { Post } from './posts.model';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getUpdate() {
    return this.postUpdated.asObservable();
  }

  addPost( title: string, content: string, dateTime: Date) {
    const post: Post = { id: null, title: title, content: content, dateTime: new Date() };
    this.http.post<{message: string}>
    ('http://localhost:3000/api/posts', post)
    .subscribe((response) => {
      console.log(response.message)
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
    })
  }

  getPost() {
    this.http.get<{message: string, posts: Post[]}>
    ('http://localhost:3000/api/posts')
    .subscribe(postData => {
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts])
    })
  }
}
