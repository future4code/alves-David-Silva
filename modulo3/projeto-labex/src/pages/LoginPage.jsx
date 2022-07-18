import { Button, Divider, Flex, Input, useToast, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage } from '../routes/Coordinator'

const LoginPage = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
        Logado com sucesso!
      </Box>
    )
  })

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      "email": email,
      "password": password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-silva-alves/login',body, {
      Headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=>{
      localStorage.setItem('token', res.data.token)
      toastSuccess()
      goToAdminHomePage(navigate)
    }).catch((err)=>{
      alert(err.message)
    })
  }

  return (
    <Flex direction={'column'} alignItems={'center'}  >
      <Header/>
      <Divider orientation='horizontal' mb={'20px'} />

      <Flex border={'2px solid white'} borderRadius={'5px'} alignItems={'center'} justifyContent={'space-around'} width={'280px'} height={'350px'} flexDirection={'column'} gap={'10px'} bg={'#0000003d'} p={'10px'}>
      <Heading >Login</Heading>
      <Input type='email' onChange={onChangeEmail} value={email} placeholder={'E-mail'} />
      <Input type='password' onChange={onChangePassword} value={password} placeholder={'Senha'} />
      <Button  onClick={onSubmitLogin} width={'100%'} colorScheme={'green'}>Enviar</Button>
      </Flex>

      </Flex>
  )
}

export default LoginPage