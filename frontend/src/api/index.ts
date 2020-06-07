import axios from 'axios';
import { Todo } from '../model/Todo';

interface TodoResponse {
  id: string;
  title: string;
  done: boolean;
}

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseUrl: 'http://localhost:8000',
  timeout: 5000,
};

export class API {
  config: ApiConfig;

  constructor(optionConfig?: ApiConfig) {
    this.config = {
      ...DEFAULT_API_CONFIG,
      ...optionConfig,
    };
  }

  instance = axios.create(this.config);

  buildTodo = (response: TodoResponse): Todo => {
    const id = response.id;
    const title = response.title;
    const done = response.done;
    return new Todo({ id, title, done });
  };

  buildTodos = (responses: TodoResponse[]): Todo[] => {
    let todos: Todo[] = [];
    responses.map((response) => {
      const todo = this.buildTodo(response);
      todos.push(todo);
    });
    return todos;
  };

  getTodos = async () => {
    const url = this.config.baseUrl + '/todos/';
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    return this.buildTodos(response.data);
  };

  addTodo = async (title: string): Promise<Todo> => {
    const url = this.config.baseUrl + '/todo/create/';

    const data = {
      title: title,
      done: false,
    };

    const response = await axios.post(url, data);
    if (response.status !== 201) {
      throw new Error('Server Error');
    }
    return new Todo({
      id: response.data.id,
      title: response.data.title,
      done: response.data.done,
    });
  };

  updateTodo = async (todo: Todo) => {
    const url = this.config.baseUrl + `/todo/update/${todo.props.id}/`;
    const data = {
      id: todo.props.id,
      title: todo.props.title,
      done: todo.props.done,
    };

    const response = await axios.patch(url, data);

    if (response.status !== 200) {
      throw new Error('Server Error');
    }
    return this.buildTodo(response.data);
  };

  deleteTodo = async (id: string) => {
    const url = this.config.baseUrl + `/todo/delete/${id}/`;

    const response = await axios.delete(url);

    if (response.status !== 204) {
      throw new Error('Server Error');
    }
  };
}
