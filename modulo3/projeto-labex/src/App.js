import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import Router from './routes/Router'

const App = () => {
  return (
    <Flex
      direction={'column'}
      minH={'100vh'}
      w={'100vw'}
      maxW={'100%'}
      bgGradient={'linear(to-br, gray.700, gray.800, gray.900, gray.800, gray.700)'}>
      
      <Router/>
    </Flex>
  )
}

export default App
