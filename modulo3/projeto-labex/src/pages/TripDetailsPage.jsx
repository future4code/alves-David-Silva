import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { goToLoginPage  } from '../routes/Coordinator'

const TripDetailsPage = () => {
  
  const navigate = useNavigate()
  const params = useParams()  
  const [tripDetails, setTripDetails] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token === null){
      alert('É preciso estar logado para acessar essa página.')
      goToLoginPage(navigate)
    }
  },[])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trip/${params.tripId}`, {
      headers: {
        auth: token
      }
    }).then((res)=>{
      setTripDetails(res.data.trip)
    }).catch((err)=>{
      alert(err.message)
    })
  },[])
  

  const candidates = tripDetails.candidates?.map((element) => {
    if(element){
    return(
      <Flex key={element.id} direction={'column'} mt='10px'>
        <Divider orientation='horizontal'/>
      <Text>Nome: {element.name}</Text>
      <Text>Idade: {element.age}</Text>
      <Text>Profissão: {element.profession}</Text>
      <Text>País: {element.country}</Text>
      <Text>Apresentação: {element.applicationText}</Text>
      </Flex>
    )}else{
      return(
        <Flex>
          <Text>Sem candidatos até o momento.</Text>
        </Flex>
      )
    }
  })

  const approveds = tripDetails.approved?.map((element)=>{
    
      return (
        <Flex>
          {element.name}
        </Flex>
      )
  })

  console.log(tripDetails)

  return (
    <Flex direction={'column'}>
      <Header/>
      <Divider orientation='horizontal' />
      <Heading as='h2' size='xl'>Detalhes:</Heading>
      <Text>Nome: {tripDetails.name}</Text>
      <Text>Planeta: {tripDetails.planet}</Text>
      <Text>Dias: {tripDetails.durationInDays}</Text>
      <Text>Data: {tripDetails.date}</Text>
      <Text>Descrição: {tripDetails.description}</Text>
      <Heading as='h2' size='xl'>Candidatos: </Heading>
      {candidates}
      <Heading as='h2' size='xl'>Aprovados: </Heading>
      {approveds && <Text>Nenhum até o momento</Text>}
      </Flex>
  )
}

export default TripDetailsPage