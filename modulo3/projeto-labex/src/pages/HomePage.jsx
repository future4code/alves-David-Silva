import { Divider, Flex, Heading, Image, SlideFade, keyframes, ButtonGroup, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Header from '../components/Header'
import { goToAdminHomePage } from '../routes/Coordinator'
import { goToListTripsPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

  const navigate = useNavigate()

  const animationKeyframes = keyframes`
  0% { transform: rotate(0deg)  }
  100% { transform: rotate(360deg)  }
`
  const animation = `${animationKeyframes} 60s linear infinite`

  return (
    <Flex w={'100%'} direction={'column'} >
      <Header />
      <Divider orientation='horizontal' />
      <Flex w={'100%'} mt={'2%'} direction={'column'} align={'center'}>
        <Flex w={'100%'} align={'center'} justify={'center'} direction={'column'} >
          <Heading textTransform={'uppercase'} m={'1'} bgGradient='linear(to-l, #EC6EAD, #3494E6)' bgClip='text' fontSize={{ base: '1.3em', md: '1.5em', lg: '2em' }} fontWeight='extrabold'>
            RESERVE SUA PRÓXIMA VIAGEM
          </Heading>
          <Heading textTransform={'uppercase'} m={'1'} bgGradient='linear(to-l, #EC6EAD, #3494E6)' bgClip='text' fontSize={{ base: '2.7em', md: '3.5em', lg: '4em' }} fontWeight='extrabold'>
            INTERGALÁTICA
          </Heading>
        </Flex>
        <Flex w='25%' minW={'300px'} overflow={'hidden'} >
          <Image as={motion.img}
        animation={animation} src='planet1.png' alt='Foto de um Planeta misterioso' />
        </Flex>
        <Flex direction={{base: 'column', md: 'row', lg: 'row'}} gap={'5px'} minW={'300px'} mt={'8px'}>
          <Button minW={'250px'} minH={'50px'} onClick={()=>goToListTripsPage(navigate)} colorScheme={'purple'}>Lista de viagens</Button>
          <Button minW={'250px'} minH={'50px'} onClick={()=>goToAdminHomePage(navigate)} colorScheme={'pink'}>Área administrativa</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomePage