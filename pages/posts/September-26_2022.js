import {
  Container,
  Badge,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="September 26, 2022">
    <Container>
      <Title>
        First Day of Deployment <Badge>September 26, 2022</Badge>
      </Title>
      <P>
        First day at Lakandula High school, where we got 
        introduced to the head teacher of ICT. With the 
        introduction, we also got our own schedule for specific
        teachers. I&apos;ll be observing Grade 9 students, which is 
        being held by <b>Ms. Jacquilyn Ramos</b>, an ICT Teacher. 
      </P>
      <P>        
      Unfortunately, I didn&apos;t meet our coordinators because 
      the school is currently having their own activities, which 
      leads to some teachers being out of school. We are assigned 
      to report back on Monday October 3 to meet and greet our coordinators.
      </P>



      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_01.jpg" alt="Core Values" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>LDHS Core Values[1/2]</Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>

      <WorkImage src="/images/post/LKDHS_02.jpg" alt="Trash Can" />
      <Section>
        <Divider my={6} />
      </Section>
      
      <WorkImage src="/images/post/LKDHS_03.jpg" alt="Mission, Vission, Mandate" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>School Mission, Vission, Mandate</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
