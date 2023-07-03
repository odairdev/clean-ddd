import { randomUUID } from "crypto";

interface QuestionData {
  id: string;
  title: string;
  content: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor({ title, content, id }: QuestionData, authorId: string) {
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.id = id ?? randomUUID();
  }
}
