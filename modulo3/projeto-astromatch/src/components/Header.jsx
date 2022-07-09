import React from 'react'
import { Flex, Text, Button, ButtonGroup } from '@chakra-ui/react'

const Header = (props) => {

  const displayButton = () => {
    if (props.screen === 'matches') {
      return (
        <ButtonGroup>
          <Button colorScheme={'red'} onClick={props.goToProfiles}>Ir para Profiles</Button>
        </ButtonGroup>
      )
    } else if (props.screen === 'profiles') {
      return (
        <ButtonGroup>
          <Button colorScheme={'red'} onClick={props.goToMatches}>Ir para Matches</Button>
        </ButtonGroup>
      )
    }
  }

  return (
    <Flex direction={'column'} align='center'>
      <Text fontSize={'50px'}>HEADER</Text>
      {displayButton()}
    </Flex>
  )
}
export default Header