import {
  Container,
  Badge,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="October 24, 2022">
    <Container>
      <Title>
        Nineth Day of Deployment<Badge>October 24, 2022</Badge>
      </Title>
      <P>
        With the unexpected flag raising at Universidad de Manila 
        that took longer than I expected, I was able to report at 
        10 AM to visit Lakandula. The Activitiy for today is Checking 
        and Frequency of errors for their previous assessment last 
        Friday assessing the mistakes and evaluating their performance.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_57.jpg" alt="" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Frequency of Errors</Center>
      </Heading>

      <Section>
        <Divider my={6} />
      </Section>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
