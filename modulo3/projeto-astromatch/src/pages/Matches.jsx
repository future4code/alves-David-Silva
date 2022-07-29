import axios from 'axios'
import { useState, useEffect } from 'react'
import { USER } from '../constants/USER'
import { Flex, Heading, Image, Text, useToast, Box } from '@chakra-ui/react'

const Matches = () => {
    const [crushes, setCrushes] = useState([])
    const toastError = useToast({
        position: 'top',
        duration: 5000,
        render: () => (
            <Box
                color='white'
                p={3}
                bg='black'
                border='1px solid white'
                fontWeight={'extrabold'}>
                ERRO INESPERADO, TENTE NOVAMENTE OU AGUARDE.
            </Box>
        )
    })
    const getCrushes = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${USER}/matches`)
            .then((res) => {
                setCrushes(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                toastError()
            })
    }
    useEffect(() => {
        getCrushes()
    }, [])
    const mapCrushes = crushes.map((crush) => {
        return (
            <Flex
                align={'center'}
                minW='80%'
                m='1rem'
                p='1rem'
                bg='blackAlpha.300'
                border='1px solid white'>
                <Image
                    src={crush.photo}
                    width='100px' />
                <Text
                    fontSize={'2xl'}
                    pl='10px'
                    key={crush.id}>
                    {crush.name}
                </Text>
            </Flex>
        )
    })
    return (
        <Flex
            direction={'column'}
            align='center'
            minW='25vw'>
            <Heading>
                Crushes
            </Heading>
            {mapCrushes}
        </Flex>
    )
}

export default Matches