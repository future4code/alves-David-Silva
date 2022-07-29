import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { goToApplicationFormPage, goToTripDetailsPage } from '../routes/Coordinator'

const ListTripsPage = () => {
  const [tripsList, setTripsList] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  const token = localStorage.getItem('token')

  const getTrips = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips')
      .then((res)=>{ 
        setTripsList(res.data.trips)
      })
      .catch((err)=>{
        alert(err.message)
      }) 
  }

  useEffect(()=>{
    getTrips()
  },[])

  const displayTripsList = tripsList.map((e)=>{
    
    return (
      <Flex key={e.id} w={{base: '90vw', md: '50vw', lg: '30vw'}}  direction={'column'} bg={'blackAlpha.400'}  borderRadius={'10px'} border='1px solid lightgray' mt={'20px'} mb={'5px'} p={'5px'}>        
        
        {token === null ? (
          <>
        <Text><b>Nome:</b> {e.name}</Text>
        <Text><b>Planeta:</b> {e.planet}</Text>
        <Text><b>Duração:</b> {e.durationInDays}</Text>
        <Text><b>Data:</b> {e.date}</Text>
        <Text><b>Descrição:</b> {e.description}</Text>
        <Button mt='20px' colorScheme={'blue'} onClick={()=>{
          localStorage.setItem('viagem', e.name)
          goToApplicationFormPage(navigate,e.id)
          }}>Aplicar</Button>
          </>
        ) : (
          <>
        <Text><b>Nome:</b> {e.name}</Text>
        <Text><b>Planeta:</b> {e.planet}</Text>
        <Text><b>Duração:</b> {e.durationInDays}</Text>
        <Text><b>Data:</b> {e.date}</Text>
        <Text><b>Descrição:</b> {e.description}</Text>
        <Button mt='20px' colorScheme={'blue'} onClick={()=>{
          goToTripDetailsPage(navigate,e.id)
          }}>Detalhes</Button>
          </>
        )}
        <Divider orientation='horizontal' />
      </Flex>
    )
  })

  return (
    <Flex direction={'column'} align={'center'}>
      <Header/>
      <Divider orientation='horizontal' />
      <Heading mt={'12px'} as='h2' size='xl' >Viagens Disponíveis</Heading>
      {displayTripsList}
      </Flex>
  )
}

export default ListTripsPage