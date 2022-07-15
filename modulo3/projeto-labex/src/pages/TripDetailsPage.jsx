import { Divider, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { goToLoginPage  } from '../routes/Coordinator'

const TripDetailsPage = () => {
  const navigate = useNavigate()
  
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
    const getTripId = localStorage.getItem('getTripId')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trip/${getTripId}`, {
      headers: {
        auth: token
      }
    }).then((res)=>{
      setTripDetails(res.data.trip)
      
    }).catch((err)=>{
      console.log(err)
    })
  },[])

 

  return (
    <Flex direction={'column'}>
      <Header/>
      <Divider orientation='horizontal' />
      TripDetailsPage
      </Flex>
  )
}

export default TripDetailsPage