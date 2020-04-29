import React from "react";
import { ListGroupItem, Form } from "react-bootstrap";

import Todo from "../model/Todo";

interface TodoItemProps {
  todo: Todo;
  changeDone: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, changeDone }) => {
  return (
    <>
      <ListGroupItem>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="完了済み"
            checked={todo.done}
            onChange={changeDone}
          />
        </Form.Group>
        {todo.title}
      </ListGroupItem>
    </>
  );
};

export default TodoItem;
