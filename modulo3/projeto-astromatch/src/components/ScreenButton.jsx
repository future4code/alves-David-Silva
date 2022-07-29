import { Flex, Button, ButtonGroup } from '@chakra-ui/react'

const ScreenButton = (props) => {
  const displayButton = () => {
    if (props.screen === 'matches') {
      return (
        <ButtonGroup>
          <Button
            colorScheme={'red'}
            onClick={props.goToProfiles}>
            Ver Perfis
          </Button>
        </ButtonGroup>
      )
    } else if (props.screen === 'profiles') {
      return (
        <ButtonGroup>
          <Button
            colorScheme={'red'}
            onClick={props.goToMatches}>
            Ver Crushes
          </Button>
        </ButtonGroup>
      )
    }
  }
  return (
    <Flex
      direction={'column'}
      align='center'>
      {displayButton()}
    </Flex>
  )
}
export default ScreenButton