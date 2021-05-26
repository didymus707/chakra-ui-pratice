import './App.css';
import { Heading, VStack } from '@chakra-ui/layout';
import TodoLists from './components/TodoLists';
import AddTodo from './components/AddTodo';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
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

  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <VStack p={4}>
        <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <useColorMode></useColorMode>
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
