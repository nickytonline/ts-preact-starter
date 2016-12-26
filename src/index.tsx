import * as preact from 'preact';
import TodoList from './components/todo-list';

preact.render(
  <TodoList />,
  document.querySelector('#root')
);
