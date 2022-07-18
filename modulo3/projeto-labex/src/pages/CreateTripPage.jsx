import { Divider, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/Coordinator'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
import axios from 'axios'

const CreateTripPage = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token === null) {
      alert('É preciso estar logado para acessar essa página.')
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
      alert('Sucesso!')
      console.log(res)
    }).catch((err)=>{
      alert(err.message)
      console.log(err)
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

const StyledTitle = styled.h1`
font-size: xx-large;
align-self: center;
margin: 20px 0 20px 0;
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