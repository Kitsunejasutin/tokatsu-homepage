import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Documents = () => (
  <Layout>
    <Container>
    <Heading as="h1">Preparing</Heading>
      <Text>This is still under construction</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default Documents
export { getServerSideProps } from '../components/chakra'
