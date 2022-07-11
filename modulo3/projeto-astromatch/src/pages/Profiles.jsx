import axios from 'axios'
import { Flex, Text, Button, ButtonGroup, Image, useToast, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { USER } from '../constants/USER'

const Profiles = () => {
  const [crushProfile, setCrushProfile] = useState({})
  const toastMatch = useToast({
    position: 'top',
    duration: 5000,
    render: () => (
      <Box
        color='white'
        p={3}
        bg='red.500'
        border='1px solid white'
        fontWeight={'extrabold'}>
        PARABÉNS! ESSE CRUSH TAMBÉM CURTIU VOCÊ!
      </Box>
    )
  })
  const toastClear = useToast({
    position: 'top',
    duration: 5000,
    render: () => (
      <Box
        color='white'
        p={3}
        bg='green.500'
        border='1px solid white'
        fontWeight={'extrabold'}>
        SUCESSO, MATCHES RESETADOS!
      </Box>
    )
  })
  const toastError = useToast({
    position: 'top',
    duration: 5000,
    render: () => (
      <Box
        color='white'
        p={3}
        bg='black'
        border='1px solid white'
        fontWeight={'extrabold'}>
        ERRO INESPERADO, TENTE NOVAMENTE OU AGUARDE.
      </Box>
    )
  })
  const getProfile = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/person`)
      .then((res) => {
        setCrushProfile(res.data.profile)
        console.log(res.data)
      })
      .catch((err) => toastError())
  }
  const choosePerson = (id, like) => {
    const body = {
      "id": id,
      "choice": like
    }
    const headers = {
      "Content-Type": "application/json"
    }
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/choose-person`, body, headers).then((res) => {
      console.log(res)
      if (res.data.isMatch === true) {
        toastMatch()
        getProfile(`${USER}`)
      } else {
        getProfile(`${USER}`)
      }
    }).catch((err) => toastError())
  }
  const clearCrushs = () => {
    const headers = {
      "Content-Type": "application/json"
    }
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/clear`, headers)
      .then((res) => {
        getProfile(`${USER}`)
        toastClear()
      })
      .catch((err) => {
        console.log(err)
        toastError()
      })
  }
  useEffect(() => {
    getProfile(`${USER}`)
  }, [])
  return (
    <Flex>
      {crushProfile
        ?
        (
          <Flex
            direction={'column'}
            align='center'
            justify={'center'}
            gap='1rem'>
            <Image
              src={crushProfile.photo}
              alt={crushProfile.photo_alt}
              width='200px' height={'200px'}
              border='1px solid' />
            <Text
              fontSize={'2xl'}>
              {crushProfile.name}, {crushProfile.age} anos.
            </Text>
            <Text
              width={'70%'}
              textAlign={'center'}>
              Bio: {crushProfile.bio}
            </Text>
            <ButtonGroup>
              <Button
                onClick={() => { choosePerson(crushProfile.id, true) }}>
                Like ❤
              </Button>
              <Button onClick={() => { choosePerson(crushProfile.id, false) }}>
                Dislike 💔
              </Button>
            </ButtonGroup>
          </Flex>
        )
        :
        (
          <ButtonGroup>
            <Button onClick={() => clearCrushs()}>
              Resetar meus crushs
            </Button>
          </ButtonGroup>
        )
      }
    </Flex>
  )
}

export default Profiles