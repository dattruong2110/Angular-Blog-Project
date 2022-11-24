import { v4 as uuidv4 } from 'uuid';

export class Post {
  id: string = uuidv4();
  title: string;
  content: string;
  dateTime: Date = new Date();
  inEdit: boolean = false;
  comments: Comment[] = [];
  isLike: number = 0;
  isLikeComments: boolean = false;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export class Comment {
  id: string = uuidv4();
  content: string;
  likeCount: number = 0;
}
