import { render, h } from 'preact';
import TodoList from './components/todo-list';

render(
  <TodoList />,
  document.querySelector('#root')
);
