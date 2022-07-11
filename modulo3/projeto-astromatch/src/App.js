import { useState, useEffect } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import ScreenButton from './components/ScreenButton'
import Profiles from './pages/Profiles'
import Matches from './pages/Matches'
import Logo from './assets/logo2edit.png'

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
    <Flex
      minW={'100vw'}
      minH={'100vh'}
      direction='column'
      justify={'center'}
      align={'center'}
      bg={'linear-gradient(to bottom, #aa076b, #61045f)'}>
      <Image
        src={Logo}
        width='10rem'
        position={'relative'}
        top='0'
        mt='-20px'
        mb='-20px' />
      {screen === 'profiles'
        ?
        (<Flex
          direction={'column'}
          mt='20px'
          minW='370px'
          w={'35%'}
          h={'75vh'}
          gap='1rem'
          align='center'
          justify={'center'}
          border='0.1rem solid'
          borderRadius={'100%'}
          bg='blackAlpha.500'>
          <ScreenButton
            screen={screen}
            goToProfiles={goToProfiles}
            goToMatches={goToMatches} />
          {screenConditionals()}
        </Flex>)
        :
        (<Flex
          direction={'column'}
          mt='20px'
          pt='30px'
          pb='30px'
          minW='300px'
          gap='1rem'
          align='center'
          justify={'center'}
          border='0.1rem solid'
          bg='blackAlpha.500'>
          <ScreenButton
            screen={screen}
            goToProfiles={goToProfiles}
            goToMatches={goToMatches} />
          {screenConditionals()}
        </Flex>)
      }
    </Flex>
  )
}

export default App