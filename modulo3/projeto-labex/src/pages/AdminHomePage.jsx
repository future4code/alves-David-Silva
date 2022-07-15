import { Divider, Flex, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToCreateTripPage, goToTripDetailsPage, goToLoginPage  } from '../routes/Coordinator'

const AdminHomePage = () => {
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
      <Button colorScheme={'blackAlpha'} onClick={()=>goToCreateTripPage(navigate)}>Criar viagem</Button>
      <Button colorScheme={'blackAlpha'} onClick={()=>goToTripDetailsPage(navigate)}>Detalhes de viagens</Button>
      </Flex>
  )
}

export default AdminHomePage