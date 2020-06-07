import React, { useReducer, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoReducer, initialState } from './reducer/Reducer';
import { Container } from 'react-bootstrap';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { AppContext } from './context/AppContext';
import { TodoActionType } from './action';
import { API } from './api';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodos = async () => {
    const api = new API();
    const todos = await api.getTodos();
    dispatch({
      type: TodoActionType.LIST,
      payload: todos,
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <AppContext.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </AppContext.Provider>
    </Container>
  );
};

export default App;
