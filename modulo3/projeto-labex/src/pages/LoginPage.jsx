import { Button, Divider, Flex, Input } from '@chakra-ui/react'
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
      alert('Logado com sucesso!')
      goToAdminHomePage(navigate)
    }).catch((err)=>{
      alert(err.message)
    })
  }

  return (
    <Flex direction={'column'}>
      <Header/>
      <Divider orientation='horizontal' />

      <Input type='email' onChange={onChangeEmail} value={email} placeholder={'E-mail'} />
      <Input type='password' onChange={onChangePassword} value={password} placeholder={'Senha'} />
      <Button onClick={onSubmitLogin} colorScheme={'green'}>Enviar</Button>


      </Flex>
  )
}

export default LoginPage