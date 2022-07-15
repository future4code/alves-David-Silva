import { Divider, Flex, Heading, Image, SlideFade, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Header from '../components/Header'


const HomePage = () => {

  const animationKeyframes = keyframes`
  0% { transform: rotate(0deg)  }
  100% { transform: rotate(360deg)  }
`
  const animation = `${animationKeyframes} 60s linear infinite`

  return (
    <Flex w={'100%'} direction={'column'} >
      <Header />
      <Divider orientation='horizontal' />
      <Flex w={'100%'} mt={'5%'} direction={'column'} align={'center'}>
        <Flex w={'100%'} align={'center'} justify={'center'} direction={'column'} >
          <Heading textTransform={'uppercase'} m={'1'} bgGradient='linear(to-l, #EC6EAD, #3494E6)' bgClip='text' fontSize={{ base: '1.3em', md: '1.5em', lg: '2em' }} fontWeight='extrabold'>
            RESERVE SUA PRÓXIMA VIAGEM
          </Heading>
          <Heading textTransform={'uppercase'} m={'1'} bgGradient='linear(to-l, #EC6EAD, #3494E6)' bgClip='text' fontSize={{ base: '2.7em', md: '3.5em', lg: '4em' }} fontWeight='extrabold'>
            INTERGALÁTICA
          </Heading>
        </Flex>
        <Flex w='30%' minW={'350px'} overflow={'hidden'} >
          <Image as={motion.img}
        animation={animation} src='planet1.png' alt='Foto de um Planeta misterioso' />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomePage