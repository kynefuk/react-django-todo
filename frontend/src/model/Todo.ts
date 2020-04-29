export default class Todo {
  uuid: string;
  title: string;
  done: boolean;

  constructor(uuid: string, title: string, done: boolean) {
    this.uuid = uuid;
    this.title = title;
    this.done = done;
  }
}
