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
  <Layout title="October 17, 2022">
    <Container>
      <Title>
        Sixth Day of Deployment<Badge>October 17, 2022</Badge>
      </Title>
      <P>
        With the unexpected absence of Ms. Ramos, I immediately 
        took a piece of paper to list down all the names that is
        present in our class. 
      </P>

      <WorkImage src="/images/post/LKDHS_28.jpg" alt="" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Attendance of 2 sections</Center>
      </Heading>

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
