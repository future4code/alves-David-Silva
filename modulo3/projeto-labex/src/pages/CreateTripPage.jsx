import { Box, Button, Divider, Flex, Heading, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from '../routes/Coordinator'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
import axios from 'axios'

const CreateTripPage = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const toastSuccess = useToast({
    position: 'top',
    duration: 5000,
    render: () => (
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        color='white'
        p={3}
        bg='mediumseagreen'
        border='1px solid white'
        fontWeight={'extrabold'}>
        Viagem criada com sucesso!
      </Box>
    )
  })
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

  useEffect(() => {
    if (token === null) {
      toastWrong()
      goToLoginPage(navigate)
    }
  }, [])

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const createTrip = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips`, body, {
      headers: {
        "Content-Type" : "application/json",
        "auth" : token
      }
    }).then((res)=>{
      toastSuccess()
    }).catch((err)=>{
      alert(err.message)
    })
    cleanFields();
  };

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Header />
      <Divider orientation='horizontal' />
      <Heading mt={'10px'} mb={'20px'}>Criar Viagem</Heading>
      <StyledForm onSubmit={createTrip}>
        <StyledInput
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        <StyledInput
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          placeholder="Planeta"
          required
        />
        <StyledInput
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
          type={'date'}
        />
        <StyledInput
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 letras"}
        />
        <StyledInput
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          required
          type={'number'}
          min={'50'}
          title={"A duração deve ser de no mínimo 50 dias"}
        />
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
      <Button mt={'20px'} colorScheme={'whiteAlpha'} onClick={()=>goToAdminHomePage(navigate)}>Home</Button>
    </Flex>
  )
}

export default CreateTripPage

const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
background-color: #0000003d;
padding: 20px;
border: 2px solid white;
border-radius: 5px;
`
const StyledInput = styled.input`
color: black;
width: 290px;
height: 40px;
`

const StyledButton = styled.button`
background-color: #3182ce;
padding: 5px;
border-radius: 5px;
width: 290px;
height: 40px;
:hover{
  background-color: #2b6cb0;
}
`