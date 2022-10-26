import {
  Container,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkImage } from '../../components/work'
import { Title } from '../../components/documents'
import P from '../../components/paragraph'
import U from '../../components/underline'

const Work = () => (
  <Layout title="Activity #5">
    <Container>
      <Title>
        Activity #5
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #5</Center>
      </Heading>
      <P>
        You will be assigned to observe a class. This will give you an opportunity to find out 
        the manner and the extent to which principles are applied in the classroom.
        Be guided by the following:
      </P>
      <P>
        1.	During observation of the class, accomplish the observation sheet written below. In which the 
      </P>
      <P>
        2.	Analyze the checklist by answering the given questions.
      </P>
      <P>
        3.	Make a reflective writing on the application and non-application of the principle in 
        the classroom by answering the given question. 
      </P>
      <P>  
        4.	For purposes of reliability, include this in your e portfolio.
      </P>
      <P>
        5.	The first was done for you. You can change it based on what you have observed.
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        Analysis
      </Heading>
      <P>
        1. Enumerate the most applied principles. How was it applied?
      </P>
      <U>
        The principle &quot;Learning is a cooperative and collaborative process.&quot; is the main principle that 
        the teacher is pursuing. It implies that the all teaching happening inside the classroom is 
        useless if the students doesn&apos;t understand a thing. The teacher asks for questions regularly and 
        keeps the students updated on the topic.
      </U>
      <Section></Section>
      <P>
        2. Which principle of learning was least applied? Give instances where this/these principles could have 
        been applied.
      </P>
      <U>
        In my observation there&apos;s no any principles that is being applied the least as the teacher is flexible
        in different scenarios inside the classroom.
      </U>
      <Section></Section>
      <P>
        3. How did the application of these learning principles affect learning?
      </P>
      <U>
        This will be the foundation of the teaching environment that will be implemented inside the classroom.
        This will affect the learning standards, the students capabilities and motivational impact to them.
      </U>
      <Section></Section>
      <P>
        4. How did the non-application of these learning principles affect learning?
      </P>
      <U>
        Without these principles, the classroom will be empty handed when the real-life scenarios comes in.
        It will be hard to the teacher to come up to solutions to different problems that may ocuur inside
        the classroom. Adapting to classroom environment is one of the key factors that should consider if
        we are creating a friendly classroom for the students.
      </U>
      <Section></Section>
      <P>
        5. Do you agree with these principles of learning? Why or why not?
      </P>
      <U>
        Yes I agree to these principles of learning because based on my observations, it really helps the teacher
        comfronting the students. It creates a pathway for the teachers to move the class forward and adjusting
        the students behavioral when it comes to learning.
      </U>
      <Section></Section>
      <WorkImage src="/images/documents/table3.png" alt="Table" />

      <Section>
      </Section>
      <Section>
        <Divider my={6} />
      </Section>
      <P>

      </P>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
