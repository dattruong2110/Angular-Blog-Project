export class Post {
  title: string;
  content: string;
  dateTime: Date = new Date();
  inEdit: boolean = false;
  comments: string[] = [];

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
