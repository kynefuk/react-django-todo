import axios from "axios";
import Todo from "../model/Todo";

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseUrl: "http://localhost:8000",
  timeout: 5000,
};

export class TodoAPI {
  config: ApiConfig;

  constructor(optionConfig?: ApiConfig) {
    this.config = {
      ...DEFAULT_API_CONFIG,
      ...optionConfig,
    };
  }

  instance = axios.create(this.config);

  getTodoList = async () => {
    try {
      const response = await axios.get("/todos/");

      if (response.status !== 200) {
        throw new Error("Server Error");
      }
      const todos: Todo[] = response.data;

      return todos;
    } catch (err) {
      throw err;
    }
  };

  creatTodo = async (title: string) => {
    const url = "/todo/create/";
    const data = {
      title: title,
      done: false,
    };

    try {
      const response = await axios.post(url, data);

      if (response.status !== 201) {
        throw new Error("Server Error");
      }
      const newTodo: Todo = response.data;

      return newTodo;
    } catch (err) {
      throw err;
    }
  };

  updateTodo = async (uuid: boolean, title: string, done: boolean) => {
    const url = `/todo/update/${uuid}/`;
    const data = {
      uuid,
      title,
      done,
    };

    try {
      const response = await axios.patch(url, data);

      if (response.status !== 200) {
        throw new Error("Server Error");
      }

      const updatedTodo = response.data;

      return updatedTodo;
    } catch (err) {
      throw err;
    }
  };

  deleteTodo = async (uuid: string) => {
    const url = `/todo/delete/${uuid}/`;

    try {
      const response = await axios.delete(url);

      if (response.status !== 204) {
        throw new Error("Server Error");
      }

      return uuid;
    } catch (err) {
      throw err;
    }
  };
}
