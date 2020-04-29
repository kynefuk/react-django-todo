import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

interface TodoFormProps {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const changeTitle = (
    e: React.ChangeEvent<FormControl & HTMLInputElement>
  ) => {
    const inputValue = e.currentTarget.value;
    setTitle(inputValue);
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          onChange={changeTitle}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onChange={() => addTodo(title)}>
        追加
      </Button>
    </Form>
  );
};

export default TodoForm;
