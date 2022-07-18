import { Box, Divider, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useForm from '../hooks/useForm'
import styled from 'styled-components'


const ApplicationFormPage = () => {

  const params = useParams()
  const viagem = localStorage.getItem('viagem')
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
        Aplicado com sucesso!
      </Box>
    )
  })

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/trips/${params.tripId}/apply`, body, {
      headers: {
        "Content-Type" : "application/json",
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
      <Box width={'90vw'} display={'flex'} flexDirection={'column'} textAlign={'center'}>
      <Heading mt={'10px'} mb={'20px'}>Aplicar para:</Heading>
      <Text mb={'20px'} fontSize={'1.4rem'}>{viagem}</Text>
      </Box>
      <StyledForm onSubmit={applyToTrip}>
        <StyledInput
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
          <StyledInput
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Idade"
            required
            type={'number'}
            min={'18'}
            title={"A idade mínima é de 18 anos"}
          />
            <StyledInput
              name={"profession"}
              value={form.profession}
              onChange={onChange}
              placeholder="Profissão"
              required
              pattern={"^.{10,}"}
              title={"A profissão deve ter no mínimo 10 letras"}
            />
            <StyledInput
              name={"applicationText"}
              value={form.applicationText}
              onChange={onChange}
              placeholder="Apresentação"
              required
              pattern={"^.{30,}"}
              title={"A apresentação deve ter no mínimo 30 letras"}
            />
            <StyledInput
          name={"country"}
          value={form.country}
          onChange={onChange}
          placeholder="País"
          required
          pattern={"^.{3,}"}
          title={"O país deve ter no mínimo 3 letras"}
        />
        
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
    </Flex>
  )
}

export default ApplicationFormPage

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