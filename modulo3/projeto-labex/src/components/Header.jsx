import React, { useEffect } from 'react'
import {
  Wrap, WrapItem, Flex, Avatar, keyframes, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Text,
  Fade,
  useToast,
  Box
} from "@chakra-ui/react"
import { motion } from 'framer-motion'
import { BiLogIn, BiLogOut} from "react-icons/bi";
import { BiChevronDown } from 'react-icons/bi';
import { goToLoginPage, goToAdminHomePage, goToApplicationFormPage, goToCreateTripPage, goToListTripsPage, goToHome, goToTripDetailsPage } from '../routes/Coordinator'
import {useNavigate} from 'react-router-dom'
import DavidPerfil from '../assets/david-perfil.jpg'



const Header = () => {

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
        Deslogado com sucesso!
      </Box>
    )
  })
  const logout = () => {
   
      localStorage.removeItem('token')
      toastSuccess()
      goToLoginPage(navigate)
    
  }

  const animationKeyframes = keyframes`
  0% { transform: scale(1)  }
  50% { transform: scale(1.1) }
  100% { transform: scale(1)  }
`
  const animation = `${animationKeyframes} 1.5s ease-in-out infinite`

  const menuItem = (title, link) => {
    return (
      <MenuItem onClick={link} _hover={{ bg:'white', color:'black' }} _focus={{ bg:'white', color:'black' }}  _active={{bg: 'green'}}>{title}</MenuItem>
    )
  }

  return (
    <Flex w={'100%'} h='fit-content' p='0.8em' justify={'space-between'} align={'center'}>
      <Avatar
        as={motion.a}
        animation={animation}
        href={'https://www.linkedin.com/in/david-henrique-2a9135238/'}
        target='_blank'
        name='David Henrique'
        src={DavidPerfil}
      />
      <Heading
      onClick={()=>{goToHome(navigate)}}
      cursor={'pointer'}
      ml={{base: 'null', md: '11rem', lg: '11rem'}}
      fontSize={'5xl'}
      bgGradient='linear(to-b, #20ab35, #ffffff)' 
      bgClip='text'>
        LabeX
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        gap={'2'} >
          {token === null ? (
            <>
            <Button
          onClick={()=>goToLoginPage(navigate)}
          colorScheme={'green'}
          leftIcon={<BiLogIn />}
          >
          Login
        </Button>
            </>
          ) : 
          ( <Button
            onClick={logout}
            colorScheme={'red'}
            leftIcon={<BiLogOut />}
            >
            Logout
          </Button> )
          }
        
        <Menu>
        <MenuButton colorScheme={'blackAlpha'} as={Button} rightIcon={<BiChevronDown /> } direction={{ base: 'column', md: 'row', lg: 'row' }}
        justify={'center'}
        align={'center'}
        fontSize={'1.2em'}>
          Menu
        </MenuButton>
        <MenuList bg={'black'}  _active={{bg: 'black'}}>
        {token === null ? (
            <>
            {menuItem('Home',()=>goToHome(navigate))}
            {menuItem('Lista de viagens',()=>goToListTripsPage(navigate))}
            </>
          ) : (
            <>
          {menuItem('Home Admin',()=>goToAdminHomePage(navigate))}
          {menuItem('Criar viagem',()=>goToCreateTripPage(navigate))}
          {menuItem('Lista de viagens',()=>goToListTripsPage(navigate))}
          </>
          )}
          
        </MenuList>
      </Menu>
        
      </Flex>
    </Flex>
  )
}

export default Header