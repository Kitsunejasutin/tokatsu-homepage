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
        Fifth Day of Deployment<Badge>October 14, 2022</Badge>
      </Title>
      <P>
        October 14, 2022 Friday. After the whole week of discussion, they are tasked
        to answer 2 questions about system specification and what are the 
        diffent factors on why understanding specification is important.
      </P>
      <P>
        
      </P>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_24.jpg" alt="" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>2 questions about device specifications</Center>
      </Heading>
      <P>
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_25.jpg" alt="Trash Can" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Student&apos;s taking their activity</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
