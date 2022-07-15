import { Divider, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage  } from '../routes/Coordinator'

const CreateTripPage = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token === null){
      alert('É preciso estar logado para acessar essa página.')
      goToLoginPage(navigate)
    }

  },[])
  return (
    <Flex direction={'column'}>
      <Header/>
      <Divider orientation='horizontal' />
      CreateTripPage</Flex>
  )
}

export default CreateTripPage