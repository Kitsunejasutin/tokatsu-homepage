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
  <Layout title="October 19, 2022">
    <Container>
      <Title>
        Seventh Day of Deployment<Badge>October 19, 2022</Badge>
      </Title>
      <P>
        With the second day absence of Ms. Ramos, I was tasked
        to take the students&apos; attendance for today
      </P>

      <Heading as="h4" fontSize={12} my={3}>
        <Center>Attendance of 5 sections</Center>
      </Heading>
      <WorkImage src="/images/post/LKDHS_55.jpg" alt="" />
      <WorkImage src="/images/post/LKDHS_54.jpg" alt="" />
      <WorkImage src="/images/post/LKDHS_53.jpg" alt="" />
      <WorkImage src="/images/post/LKDHS_52.jpg" alt="" />
      <WorkImage src="/images/post/LKDHS_50.jpg" alt="" />

      <P>
        After collecting those student who were present in the
        designed time of their class, I forwarded these names to
        Ms. Ramos to notify her the following students&apos; attendance
      </P>

      <Section>
        <Divider my={6} />
      </Section>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
