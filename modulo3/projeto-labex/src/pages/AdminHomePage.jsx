import { Divider, Flex, Button, Heading, useToast, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToCreateTripPage, goToTripDetailsPage, goToLoginPage, goToListTripsPage  } from '../routes/Coordinator'

const AdminHomePage = () => {
  const navigate = useNavigate()
  const toastWrong = useToast({
    position: 'top',
    duration: 5000,
    render: () => (
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        color='white'
        p={3}
        bg='darkred'
        border='1px solid white'
        fontWeight={'extrabold'}>
        É preciso estar logado para acessar essa página.'
      </Box>
    )
  })

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token === null){
      toastWrong()
      goToLoginPage(navigate)
    }

  },[])

  return (
    <Flex direction={'column'} alignItems={'center'}>
      <Header/>
      <Divider orientation='horizontal' />
      <Heading mt={'20px'} mb={'20px'}>Área administrativa</Heading>
      <Flex direction={'column'} gap={'20px'} minW={'300px'} width={'20%'}>
      <Button colorScheme={'blackAlpha'} onClick={()=>goToCreateTripPage(navigate)}>Criar viagem</Button>
      <Button colorScheme={'blackAlpha'} onClick={()=>goToListTripsPage(navigate)}>Detalhes de viagens</Button>
      </Flex>
      </Flex>
  )
}

export default AdminHomePage