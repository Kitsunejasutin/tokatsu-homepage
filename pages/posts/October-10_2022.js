import {
  Container,
  Badge,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title , WorkImage} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="October 10, 2022">
    <Container>
      <Title>
        Third Day of Deployment<Badge>October 10, 2022</Badge>
      </Title>
      <P>
        The class started with different reminders and announcements of the coming 
        1st Periodical Examinations containing the lessons they tackled in 
        the past weeks. <b>October 21, 2022</b> will be the date 
        of their exams for TLE, which is next week, Friday. For their remaining 
        core subjects, they will take their exams on <b>October 26 and 27</b>.
      </P>

      <Section>
        <Divider my={6} />
      </Section>

      <P>
        The discussion for today is Processor Speed and architecture, 
        Front Side Bus or FSB and System Specification including RAM,
        Hard Disk Speed and Capacity.
      </P>
      <Section>
      </Section>
      <WorkImage src="/images/post/LKDHS_10.jpg" alt="Topic Construction" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Topic Discussion Visuals</Center>
      </Heading>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/post/LKDHS_08.jpg" alt="9-15 Class" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>9-15 Class</Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_09.jpg" alt="9-19 Class" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>9-19  Class</Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_12.jpg" alt="Hands-on Activity" />
      <Heading as="h4" fontSize={12} my={4}>
        <Center>Hands-on activity which lets the student to plug-in different
          types of cables. [1/2]
        </Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_13.jpg" alt="9-4 Class" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Hands-on activity which lets the student to plug-in different
          types of cables. [2/2]</Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_15.jpg" alt="Identifying the cables" />
      <Heading as="h4" fontSize={12} my={2}>
        <Center>Part 2 of the hands-on where the students is tasked to identify
          the different cables.
        </Center>
      </Heading>
      <Section>
        <Divider my={6} />
      </Section>
      <WorkImage src="/images/post/LKDHS_11.jpg" alt="Motherboard" />
      <Heading as="h4" fontSize={12} my={3}>
        <Center>Motherboard used to visualize the Ports, Sockets and different parts of it</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
