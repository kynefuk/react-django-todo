import React from "react";
import { ListGroup } from "react-bootstrap";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Todo from "../model/Todo";

interface TodoListProps {
  todos: Todo[];
  changeDone: () => void;
  addTodo: (title: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, changeDone, addTodo }) => {
  return (
    <>
      <TodoForm addTodo={addTodo} />
      <ListGroup>
        {todos.map((todo) => {
          <TodoItem todo={todo} changeDone={changeDone} />;
        })}
      </ListGroup>
    </>
  );
};

export default TodoList;
