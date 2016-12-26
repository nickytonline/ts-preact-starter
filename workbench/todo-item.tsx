import { storiesOf } from '@kadira/storybook';
import * as preact from 'preact';
import TodoItem from '../src/components/todo-item';

declare var module;

storiesOf('Hello World', module)
  .add('with text', () => {

    return (
      <TodoItem
        text='pick up milk'
        />
    );
  });