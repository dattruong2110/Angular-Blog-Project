import { v4 as uuidv4 } from 'uuid';

export class Post {
  id: number = uuidv4();
  title: string;
  content: string;
  dateTime: Date = new Date();
  inEdit: boolean = false;
  comments: string[] = [];
  isLike: number = 0;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
