import {
  Container,
  Badge,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="September 26, 2022">
    <Container>
      <Title>
        First Day of Deployment <Badge>September 26, 2022</Badge>
      </Title>
      <P>
        First day at Lakandula High school where we are got 
        introduced to head teacher of ICT. With the introduction
        , we aslo got our own schedule to specific teachers.
        I'll be oberserving Grade 9 students witch is being 
        held by <b>Ms. Jacquilyn Ramos</b>, a ICT Teacher. 
      </P>
      <P>        
        Unfortunately we didn't met our proctors as the school
        is currently having their exams which leads the 
        teachers to be out of school. We are assigned to
        report back on Monday <b>October 3</b> to meet and
        greet out proctors.
      </P>



      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_01.jpg" alt="Core Values" />
      <WorkImage src="/images/post/LKDHS_02.jpg" alt="Trash Can" />
      <WorkImage src="/images/post/LKDHS_03.jpg" alt="Mission, Vission, Mandate" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
