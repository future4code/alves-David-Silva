import React from 'react'
import { useState, useEffect } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Header from './components/Header'
import Profiles from './pages/Profiles'
import Matches from './pages/Matches'

const App = () => {

  const [screen, setScreen] = useState('profiles')

  const screenConditionals = () => {
    if (screen === 'profiles') {
      return <Profiles />
    } else if (screen === 'matches') {
      return <Matches />
    } else {
      alert("Erro, página não entrada")
    }
  }

  useEffect(() => {
    screenConditionals()
  }, [])

  const goToProfiles = () => {
    setScreen('profiles')
  }

  const goToMatches = () => {
    setScreen('matches')
  }

  return (
    <Flex w={'100vw'} h={'100vh'} direction='column' justify={'center'} align={'center'} bg={'linear-gradient(to bottom, #aa076b, #61045f)'}>
      <Heading>Crush Match</Heading>
      <Flex direction={'column'} w={'35%'} h={'90%'} gap='1rem' align='center' justify={'center'} border='0.1rem solid' borderRadius={'100%'} bg='blackAlpha.500'>
        <Header screen={screen} goToProfiles={goToProfiles} goToMatches={goToMatches} />
        {screenConditionals()}
      </Flex>
    </Flex>
  )
}

export default App