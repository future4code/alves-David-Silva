// import { Avatar, Wrap, WrapItem, Flex, Button, keyframes, textDecoration } from "@chakra-ui/react"
// import { BiLogIn, BiLogOut } from "react-icons/bi";
// import { motion } from 'framer-motion';
// import {goToLoginPage} from '../routes/Coordinator'
// import {useNavigate} from 'react-router-dom'

// const navigate = useNavigate()

// const animationKeyframes = keyframes`
//   0% { transform: scale(1)  }
//   50% { transform: scale(1.1)  }
//   100% { transform: scale(1)  }
// `;

// const animation = `${animationKeyframes} 1.5s ease-in-out infinite`;

// export const devAvatar = () => {
//     return (
//         <Avatar
//             as={motion.a}
//             animation={animation}
//             href={'https://www.linkedin.com/in/david-henrique-2a9135238/'}
//             target='_blank'
//             name='David Henrique'
//             src='david-perfil.jpg'
//         />
//     )
// }

// export const navMenu = () => {
//     const WrapItemWithHover = (text) => {
//         return (<WrapItem color={'gray.200'} _hover={{ textDecoration: 'underline', cursor: 'pointer', color: 'gray.50' }}>
//             {text}
//         </WrapItem>)
//     }


//     return (
//         <>
//             <Wrap direction={{ base: 'column', md: 'row', lg: 'row' }}
//                 justify={'center'}
//                 align={'center'}
//                 fontSize={'1.2em'}>
//                 {WrapItemWithHover('AdminHomePage')}
//                 {WrapItemWithHover('ApplicationFormPage')}
//                 {WrapItemWithHover('CreateTripPage')}
//                 {WrapItemWithHover('HomePage')}
//                 {WrapItemWithHover('ListTripsPage')}
//                 {WrapItemWithHover('LoginPage')}
//                 {WrapItemWithHover('ListDetailsPage')}
//             </Wrap>
//             <Flex
//                 direction={{ base: 'column', md: 'row', lg: 'row' }}
//                 gap={'2'}>
//                 <Button
//                 onClick={()=>goToLoginPage(navigate)}
//                     colorScheme={'green'}
//                     leftIcon={<BiLogIn />}>
//                     Login
//                 </Button>
//                 <Button
//                     colorScheme={'red'}
//                     rightIcon={<BiLogOut />}>
//                     Logout
//                 </Button>
                
//             </Flex>
//         </>
//     )
// }



