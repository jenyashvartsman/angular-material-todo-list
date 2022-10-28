import { Todo } from '../types/todo.type';

export const todos: Todo[] = [
  {
    id: 'uuid-1',
    title: 'Create project',
    description: 'Create Angular project with Material',
    createdAt: new Date(),
    isComplete: true,
  },
  {
    id: 'uuid-2',
    title: 'Add UI components',
    createdAt: new Date(),
    isComplete: true,
  },
  {
    id: 'uuid-3',
    title: 'Refactotrs',
    createdAt: new Date(),
    isComplete: false,
  },
];
