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
  <Layout title="October 21, 2022">
    <Container>
      <Title>
        Eighth Day of Deployment<Badge>October 21, 2022</Badge>
      </Title>
      <P>
        Every Friday is scheduled to have a weekly assessment of
        the previous topics that they discussed. It contains 60
        items which is consists of 5 parts; Multiple Choice, 
        Modified True or False, Verbal Analogy, Acronyms and 
        Matching Type.
      </P>

      <WorkImage src="/images/post/LKDHS_56.jpg" alt="" />

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_52.jpg" alt="" />

      <Section>
        <Divider my={6} />
      </Section>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
