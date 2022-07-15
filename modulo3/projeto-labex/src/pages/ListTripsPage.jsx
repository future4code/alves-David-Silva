import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { goToTripDetailsPage } from '../routes/Coordinator'

const ListTripsPage = () => {
  const [tripsList, setTripsList] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  const token = localStorage.getItem('token')

  const getTrips = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips')
      .then((res)=>{ 
        setTripsList(res.data.trips)
        console.log(res.data.trips)

      })
      .catch((err)=>{
        console.log(err)
      }) 
  }

  useEffect(()=>{
    getTrips()
  },[])

  const displayTripsList = tripsList.map((e)=>{
    return (
      <Flex key={e.id} direction={'column'} gap={'20px'}>        
        
        {token === null ? (
          <>
        <Text>{e.name}</Text>
        <Text>Planeta: {e.planet}</Text>
        <Text>Duração: {e.durationInDays}</Text>
        <Text>Data: {e.date}</Text>
        <Text>Descrição: {e.description}</Text>
          </>
        ) : (
          <>
        <Text>{e.name}</Text>
        <Text>Planeta: {e.planet}</Text>
        <Text>Duração: {e.durationInDays}</Text>
        <Text>Data: {e.date}</Text>
        <Text>Descrição: {e.description}</Text>
        <Button colorScheme={'blackAlpha'} onClick={()=>{
          goToTripDetailsPage(navigate,e.id)
          
          }}>Detalhes</Button>
          </>
        )}
        <Divider orientation='horizontal' />
      </Flex>
    )
  })

  return (
    <Flex direction={'column'}>
      <Header/>
      <Divider orientation='horizontal' />
      {displayTripsList}
      </Flex>
  )
}

export default ListTripsPage