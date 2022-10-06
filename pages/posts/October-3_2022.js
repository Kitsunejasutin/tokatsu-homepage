import {
  Container,
  Badge,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="September 26, 2022">
    <Container>
      <Title>
        Second Day of Deployment<Badge>October 3, 2022</Badge>
      </Title>
      <P>
        I arrived 6:30 AM in the morning at Lakandula High School
        excited on what activities that I might do while with
        my supervisor.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
