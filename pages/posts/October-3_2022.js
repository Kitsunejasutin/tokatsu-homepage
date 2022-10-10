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
      <P>
        I met my supervisor <b>Ms. Ramos</b> which a Grade 9 TLE Vocational
        Deparment. Her advisory class which is <b>9-19</b> and also have other
        assignments which is <b>School Layout Artist</b> and a <b>Trainer for 
        Visual Graphics Design</b>.
      </P>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/supervisor.jpg" alt="supervisor" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>With my supervisor Ms. Jaquilyn Ramos</Center>
      </Heading>
      <P>
        Discussing the different hardware parts of the computer such as <b>CPU</b>, <b>GPU</b>, <b>RAM</b> and <b>Hard Drive</b>. 
        The discussion flows through out the parts on what these parts do and how they are relevant to choosing our own parts.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_07.jpg" alt="wall design" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Wall Design</Center>
      </Heading>
      <WorkImage src="/images/post/LKDHS_18.jpg" alt="environment" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Computer Lab Environment [1/2]</Center>
      </Heading>
      <WorkImage src="/images/post/LKDHS_17.jpg" alt="environment" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Computer Lab Environment [2/2]</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
