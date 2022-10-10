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
      I arrived at 6:30 AM in the morning at Lakandula High School excited 
      about what activities that I might do while with my supervisor.
      </P>
      <P>
        I met my supervisor, <b>Ms. Ramos</b> which is a Grade 9 TLE Vocational 
        Department. Her advisory class is <b>9-19</b> and also holds other 
        assignments, like <b>School Layout Artist</b> and a <b>Trainer for Visual Graphics Design</b>.
      </P>
      <Section>
      </Section>
      <WorkImage src="/images/post/supervisor.jpg" alt="supervisor" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>With my supervisor Ms. Jaquilyn Ramos</Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <P>
        Today&apos;s discussion is about the different hardware parts of the computer, such as <b>CPU</b>, <b>GPU</b>, <b>RAM</b> and <b>Hard Drive</b>. 
        The discussion flows through the parts about what these parts do and how they are relevant to choosing our own parts.
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
