import { Injectable } from '@angular/core'
import { Post } from './posts.model';
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getUpdate() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string, dateTime: any) {
    const post: Post = { title: title, content: content, dateTime: new Date() };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

  getPost() {
    return [...this.posts];
  }
}
