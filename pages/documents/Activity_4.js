import {
  Container,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title } from '../../components/documents'
import P from '../../components/paragraph'
import U from '../../components/underline'

const Work = () => (
  <Layout title="Activity #4">
    <Container>
      <Title>
        Activity #4
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #4</Center>
      </Heading>
      <P>
        You will be assigned to one class. You will observe the class 
        for the whole day in all their subjects. This will give you an 
        opportunity to observe how diverse learners are handled by the 
        teachers. Be guided by the following:
      </P>
      <P>
        1. Interview some students in the assigned class, make sure that they have different
        gender, racial, cultural, and religious background, and examine their behavior during
        class and during synchronous activities.
      </P>
      <P>
        2. Make an observation report of the students you&apos;ve interviewed by answering the
        guide questions.
      </P>
      <P>        
        3. Analyze the observation report by answering some questions.
      </P>
      <P>
        4. Make a reflection on how to deal with a diverse learner by answering the given
        questions.
      </P>
      <P>       
        5. For purposes of reliability, include this in your e portfolio
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Guide Questions
      </Heading>

      <P>
        1. Describe how the students interact with one another and with teachers.
      </P>
      <U>
        By expressing their interest to others, they are building a strong bond with each other
        and having a time where they can share their thoughts to other students. Talking to
        teachers about their problems and struggles about their subject is also one of the key
        factors to create an interaction between each other.
      </U>
      <Section></Section>
      <P>
        2. Describe how students behave when the teacher is talking and when their classmates
        are talking. Is there a difference?
      </P>
      <U>
        There are some key differences when they talk like how they assess their classmates as
        they are their company which some of the conversation contains different topics to use
        from. Where to teachers, they have a serious and direct conversation to each other
        whether it&apos;s about classes or personal things.
      </U>
      <Section></Section>
      <P>
        3. Among those students that you&apos;ve interviewed, who participate actively during class
        discussion? Who is always asking for help/assistance?
      </P>
      <U>
        There are students that stands out, the one that knows better when it comes to
        computer parts and can actively participate in the class. The one that who&apos;s asking for help
        or assistance are the one that are not familiar to different technology driven systems.
      </U>
      <Section></Section>
      <P>
        4. When a student is called and cannot answer the teachers&apos; question, what do the
        teachers do?
      </P>
      <U>
        They immediately ask if there&apos;s any part of the discussion he got confused or didn&apos;t
        understand and after knowing the part they got confused, the teacher explain that part on
        more focus giving the students a more scenarios to understand the lesson.
      </U>
      <Section></Section>
      <Heading as="h4" fontSize={16} my={6}>
        Analysis
      </Heading>
      <P>
        1. How does the teacher influence the class interaction considering the individual
        differences?
      </P>
      <U>
        The teacher influences the class by giving them a focus where they can feel that they
        are equally inside the classroom and without the less attention to each other. It
        motivates them to socialize to others and learn the patterns of the lesson proper.
      </U>
      <Section></Section>
      <P>
        2. Based on the report, were you able to correctly identify who among the students
        performed well and who did not?
      </P>
      <U>
        Based on the report, some of the students couldn&apos;t participate and perform in different
        task. Some of the factors that may have been applied is the lack of exposure to the
        hardware where is the main focus of the class.
      </U>
      <Section></Section>
      <P>
        3. Describe the differences in the ability level of the students in class. Is there a wide gap
        between students who are performing well and those that are not?
      </P>
      <U>
        In my observation there might be a huge gap between those performing well that the
        ones that aren&apos;t. Mainly is the one that perform well is the one that has the stock
        knowledge about the hardware topic while the others that aren&apos;t able to participate
        well is the one that isn&apos;t well expose to the lesson proper which is computer hardware.
      </U>
      <Section></Section>
      <P>
        4. Describe the methods used by the teacher in handling the students&apos; differences in
        abilities. How did the student respond to the teacher? Did the teacher use differentiated
        instruction? If YES, describe how.
      </P>
      <U>
        There are humongous ways that the teacher can handle its students, the first or most
        important way is creating a real-life scenario which the students tend to know and
        understand more than the technicalities of the topic. By tackling that the students mostly
        do, they can grab the experience they have and use it to understand the teacher
        lesson.
      </U>
      <U>
        The teacher use differentiated instruction by giving them explanation on why this
        scenario is the exact meaning of the lesson. It will make a mark to their knowledge that if
        ever this might happen on their real-life, they will remember it as their topic in their
        previous learning journey.
      </U>

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
