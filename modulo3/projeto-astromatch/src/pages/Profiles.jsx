import React from 'react'
import axios from 'axios'
import { Flex, Text, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { USER } from '../constants/USER'


const Profiles = () => {
  const [crushProfile, setCrushProfile] = useState({})  

  const getProfile = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/person`)
      .then((res) => {
        setCrushProfile(res.data.profile)
        console.log(res.data)
      })
      .catch((err) => { alert(err) })
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
        alert('Seu Crush também tem um Crush em você! <3')
        getProfile(`${USER}`)
      } else {
        getProfile(`${USER}`)
      }
    }).catch((err) => alert('Erro.'))
  }

  const clearCrushs = () => {
    const headers = {
      "Content-Type": "application/json"
    }

    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/clear`, headers)
      .then((res) => {
        getProfile(`${USER}`)
        alert(`${res.data.message}, crushes resetados com sucesso!`)
      })
      .catch((err) => {
        console.log(err)
        alert(`${err.message}, tente novamente!`)
      })
  }
  useEffect(() => {
    getProfile(`${USER}`)
  }, [])


  return (
    <Flex>
      {crushProfile ?
        (
          <Flex direction={'column'} align='center' justify={'center'} gap='1rem'>
            <Image src={crushProfile.photo} alt={crushProfile.photo_alt} width='200px' height={'200px'} border='1px solid' />
            <Text fontSize={'2xl'}>{crushProfile.name}, {crushProfile.age} anos.</Text>
            <Text width={'70%'} textAlign={'center'}>Bio: {crushProfile.bio}</Text>
            <ButtonGroup>
              <Button onClick={() => { choosePerson(crushProfile.id, true) }}>Like ❤</Button>
              <Button onClick={() => { choosePerson(crushProfile.id, false) }}>Dislike 💔</Button>
            </ButtonGroup>
          </Flex>
        )
        :
        (
          <ButtonGroup>
            <Button onClick={() => clearCrushs()}>Resetar meus crushs</Button>
          </ButtonGroup>
        )
      }
    </Flex>
  )
}

export default Profiles