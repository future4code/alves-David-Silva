import { useToast, Box } from "@chakra-ui/react"

const useToastSuccess = () => { useToast({
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
        Sucesso!
      </Box>
    )
  })
}

export default useToastSuccess