import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { TodoActionType } from '../action';
import { API } from '../api/index';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const addTodo = async () => {
    const api = new API();
    const todo = await api.addTodo(title);
    dispatch({
      type: TodoActionType.ADD,
      payload: [todo],
    });
    setTitle('');
  };

  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title'
          onChange={onChangeTitle}
          value={title}
        />
      </Form.Group>

      <Button variant='primary' type='button' onClick={() => addTodo()}>
        追加
      </Button>
    </Form>
  );
};
