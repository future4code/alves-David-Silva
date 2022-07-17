import { Box, Button, ButtonGroup, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { goToLoginPage } from '../routes/Coordinator'

const TripDetailsPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [tripDetails, setTripDetails] = useState([])
  const [candidates, setCandidates] = useState([])
  const [approveds, setApproveds] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token === null) {
      alert('É preciso estar logado para acessar essa página.')
      goToLoginPage(navigate)
    }
  },[])

  useEffect(() => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trip/${params.tripId}`, {
      headers: {
        auth: token
      }
    }).then((res) => {
      setTripDetails(res.data.trip)
      setCandidates(res.data.trip.candidates)
      setApproveds(res.data.trip.approved)
    }).catch((err) => {
      alert(err.message)
    })
  },[approveds])

  const deleteTrip = () => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips/${params.tripId}`,{
      headers: {
        "content-Type" : "application/json",
        "auth" : token
      }
    }).then((res)=>{
      alert('Viagem deletada!')
    }).catch((err)=>{
      alert(err.message)
    })
  }

  const showCandidates = () => {
    if (candidates.length > 0) {
      const mapCandidates = candidates.map((element) => {
        const approve = (set) => {
          const body = {
            "approve": set
          }
          axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips/${params.tripId}/candidates/${element.id}/decide`, body, {
            headers: {
              "Content-Type": "application/json",
              "auth": token
            }
          }).then((res) => {
            alert('Ação realizada com sucesso!')
            
          }).catch((err) => {
            alert(err.message)
          })
        }
        return (
          <Flex key={element.id} direction={'column'}>
            <Box w={{base: '90vw', md: '50vw', lg: '30vw'}} mb={'5px'} bg={'blackAlpha.400'} p='5px' borderRadius={'10px'} border='1px solid lightgray'>
              <Text><b>Nome:</b> {element.name}</Text>
              <Text><b>Idade:</b> {element.age}</Text>
              <Text><b>Profissão:</b> {element.profession}</Text>
              <Text><b>País:</b> {element.country}</Text>
              <Text><b>Apresentação:</b> {element.applicationText}</Text>
              <ButtonGroup w={'100%'} display={'flex'} justifyContent={'center'} mt='5px'>
                <Button w={'50%'} colorScheme={'green'} onClick={() => {
                  approve(true)
                }}>Aprovar</Button>
                <Button w={'50%'} colorScheme={'red'} onClick={() => {
                  approve(false)
                }}>Recusar</Button>
              </ButtonGroup>
            </Box>
          </Flex>
        )
      })
      return mapCandidates
    } else {
      return (
        <Box w={{base: '90vw', md: '50vw', lg: '30vw'}} mb={'5px'} bg={'blackAlpha.400'} p='5px' borderRadius={'10px'} border='1px solid lightgray'>
          <Text>Nenhum até o momento</Text>
        </Box>
      )
    }
  }

  const showApproveds = () => {
    if (approveds.length > 0) {
      const mapApproveds = approveds.map((element) => {
        return (
          <Flex key={element.id}>
            <Box w={{base: '90vw', md: '50vw', lg: '30vw'}} mb={'5px'} bg={'blackAlpha.400'} p='5px' borderRadius={'10px'} border='1px solid lightgray'>
              <Text><b>Nome:</b> {element.name}</Text>
              <Text><b>Idade:</b> {element.age}</Text>
              <Text><b>Profissão:</b> {element.profession}</Text>
              <Text><b>País:</b> {element.country}</Text>
              <Text><b>Apresentação:</b> {element.applicationText}</Text>
            </Box>
          </Flex>
        )
      })
      return mapApproveds
    }else{
      return (
        <Flex>
          <Box w={{base: '90vw', md: '50vw', lg: '30vw'}} mb={'5px'} bg={'blackAlpha.400'} p='5px' borderRadius={'10px'} border='1px solid lightgray'>
            <Text>Nenhum até o momento.</Text>
          </Box>
        </Flex>
      )
    }
  }

  return (
    <Flex direction={'column'} align={'center'} gap={'20px'}>
      <Header />
      <Divider orientation='horizontal' />
      <Heading as='h2' size='xl' margin={'auto'}>Detalhes:</Heading>
      <Box w={{base: '90vw', md: '50vw', lg: '30vw'}} mb={'5px'} bg={'blackAlpha.400'} p='5px'  borderRadius={'10px'} border='1px solid lightgray'>
        <Text><b>Nome:</b> {tripDetails.name}</Text>
        <Text><b>Planeta:</b> {tripDetails.planet}</Text>
        <Text><b>Dias:</b> {tripDetails.durationInDays}</Text>
        <Text><b>Data:</b> {tripDetails.date}</Text>
        <Text><b>Descrição:</b> {tripDetails.description}</Text>
        <ButtonGroup w={'100%'} display={'flex'} justifyContent={'center'} mt='5px'>
        <Button w={'100%'} onClick={()=>deleteTrip()} colorScheme={'red'}>Deletar Viagem</Button>
        </ButtonGroup>
      </Box>
      <Heading as='h2' size='xl' margin={'auto'}>Candidatos: </Heading>
      {showCandidates()}
      <Heading as='h2' size='xl' margin={'auto'}>Aprovados: </Heading>
      {showApproveds()}
    </Flex>
  )
}

export default TripDetailsPage