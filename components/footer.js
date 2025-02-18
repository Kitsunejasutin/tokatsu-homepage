import { 
  Box,
  Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} {' '}
      <Link href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama 
      </Link>
      {' '}& Justine Ryan J. De Guia. All Rights Reserved.
    </Box>
  )
}

export default Footer
