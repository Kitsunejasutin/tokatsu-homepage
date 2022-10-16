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
  <Layout title="October 12, 2022">
    <Container>
      <Title>
        Fourth Day of Deployment<Badge>October 12, 2022</Badge>
      </Title>
      <P>
        The Lesson Proper for today is all about <b>Processor Speed and Architecture</b>, <b>Cache</b> and <b>FSBUS</b>.
      </P>
      <P>
        Discussing the functions and process on how this parts accumulate different processes and gives performance
        impact to the system.
      </P>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_21.jpg" alt="Trash Can" />
      <P>
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_19.jpg" alt="Trash Can" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Computer Storage Hardware</Center>
      </Heading>
      <WorkImage src="/images/post/LKDHS_20.jpg" alt="Trash Can" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Processor speed and Architecture</Center>
      </Heading>
      <WorkImage src="/images/post/LKDHS_22.jpg" alt="Trash Can" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Students that are tasked to clean the classroom</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
