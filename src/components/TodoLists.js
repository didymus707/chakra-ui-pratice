import { 
  HStack, 
  VStack, 
  Text, 
  IconButton, 
  StackDivider, 
  Spacer,
  Badge
 } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoLists = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="8" borderRadius="lg">
        No Todos. yay!!!
      </Badge>
    )
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      borderColor="gray.100"
      borderRadius="lg"
      p={4}
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {console.log(typeof todos)}
      {console.log(todos)}
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoLists
