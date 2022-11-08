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
  <Layout title="October 26, 2022">
    <Container>
      <Title>
        Tenth Day of Deployment<Badge>October 26, 2022</Badge>
      </Title>
      <P>
        Their activity for today is assessing the computer/laptop
        specs that they chose. With this activity they&apos;re assigned
        to present their listed specs and identify if that specs 
        are on point with their indicated price.
      </P>
      <P>
        Scoring is determined by items that they indicated if its 
        complete or not.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_60.jpg" alt="" />
      <Section>
        <Divider my={6} />
      </Section>

      <WorkImage src="/images/post/LKDHS_61.jpg" alt="" />
      <Section>
        <Divider my={6} />
      </Section>

      <WorkImage src="/images/post/LKDHS_62.jpg" alt="" />
      <Heading as="h4" fontSize={13} my={3}>
        <Center>
          Coordinating Teacher confronting the students
          that are detected on copying their answers
          on the activity.
        </Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
