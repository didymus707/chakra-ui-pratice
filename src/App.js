import './App.css';
import { Heading, VStack } from '@chakra-ui/layout';
import TodoLists from './components/TodoLists';
import AddTodo from './components/AddTodo';
import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'Complete Chakra UI learning'
    },
    {
      id: 2,
      body: 'Start working on your task'
    }
  ]

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  return (
      <VStack p={4}>
        <IconButton
          icon={<FaSun />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
        />
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, pink.200, blue.500)"
          bgClip="text"
        >
          Todo Application
        </Heading>
        <TodoLists todos={JSON.parse(todos)} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
  );
}

export default App;
