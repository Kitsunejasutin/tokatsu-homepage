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
  <Layout title="Activity #3">
    <Container>
      <Title>
        Activity #3
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #3</Center>
      </Heading>
      <P>
        You will be assigned to the different grade levels(7-12). You will examine how classrooms are
        structured or designed to allow maximum participation and effective learning. Be guided
        by the following:
      </P>
      <P>
        1. Observe an online class or face to face class that is assigned to you, see Report
        regarding the classroom management. Please be guided by the given questions.
      </P>
      <P>
        2. Based on your observation report, answer the Classroom Management Matrix, and
        analyze the matrix by answering the questions.
      </P>
      <P>
        3. Make a reflection on how the classroom was structured or designed for an effective
        learning environment by answering the given question.
      </P>
      <P>
        4. For purposes of reliability, include this in your e portfolio.
      </P>
      <P>
        5. You may answer column 3, “Effects on the Learners” after answering the questions
        below.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Guide Questions
      </Heading>

      <P>
        1. Are there noticeable rules and procedures imposed during the classes? List them down.
      </P>
      <U>
        First rules right before entering the classroom is to put on their shoe rug to lessen the
        dust and dirt that will be coming from the students&apos; shoes. It will also lessen the burden on
        the cleaners right after their class. Procedures that are being implemented inside is
        prayer first and entertain the students with a motivational that is connected to their
        lesson. After the motivation, the teacher proceeds to lesson proper, afterwards she
        consent the students on what parts of the lesson is vague or understandable. Every
        Friday is activity day which gives us teachers what are the different parts of the lesson is
        being tackled clearly.
      </U>
      <Section></Section>
      <P>
        2. Did the students participate in the classroom rules? Enumerate how students participate.
      </P>
      <U>
        Yes, they all participate in classroom rules. Prioritizing to follow the teachers rules and
        regulations and understanding the reason behind it, makes the students to think to
        follow.
      </U>
      <Section></Section>
      <P>
        3. What are the routines of the teacher? Enumerate the routines and describe how are
        they done?
      </P>
      <U>
        1. Daily check of attendance by calling out their names.
      </U>
      <U>        
        2. Checking of different students that hasn&apos;t passed their previous activities and giving
        them a deadline date when to pass it.
      </U>
      <Section></Section>
      <P>
        4. During synchronous activities / recitation, observe if there is presence of noise. How is it
        managed by the teachers?
      </P>
      <U>
        There are small noise present inside the class, the teacher manages it by calling out
        their name to answer a question pertaining to the topic which makes them attentive
        and focus on the lesson.
      </U>
      <Section></Section>
      <P>
        5. What does the teacher do to reinforce positive behaviors of the student during
        synchronous classes?
      </P>
      <U>
        She uses different methods such as using the students to come up to their own ideas of
        the topic which tends to make the students think of a scenario with their students. She also
        implies different real-life scenarios to help the students identify and understand the lesson all
        about. She also gives the students to ask and answer different questions to broaden the
        topic.
      </U>
      <Section></Section>
      <WorkImage src="/images/documents/table2.png" alt="Table" />

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
