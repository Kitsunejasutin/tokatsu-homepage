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
  <Layout title="Activity #6">
    <Container>
      <Title>
        Activity #6
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #6</Center>
      </Heading>
      <P>
        You will observe 1-2 different classes. This will give you an opportunity to assess if the lesson objectives / learning 
        outcomes are applied in an instruction.
        Be guided by the following:
      </P>
      <P>
        1.	During the observation of the one or two classes, answer the observation sheet.
      </P>
      <P>
        2.	Based on the observation sheet, analyze the classes by answering the given question.
      </P>
      <P>
        3.	Make a learning portfolio by searching a quotation that states the significance of goals and objectives. And relate 
        the quote to learning objectives/intended learning outcomes as a guiding star in the lesson development. 
      </P>
      <P>
        4.	For purposes of reliability, include this in your e portfolio.
      </P>
      <P>
        5. In the second column, the first example is given but you have to add more to support your answer.
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        Analysis
      </Heading>
      <P>
        1.	Why is it sound teaching practice for a teacher to set the direction of the lesson and to share his/her lesson 
        objectives or intended learning outcomes with his/her students?
      </P>
      <U>
        This will give the students a insight on what are the helpful impacts of the lesson to their daily life. Students tends
        to think if this learning outcomes is even important to their lives. By making sure that it will be relevant to them, 
        expaining it to them will create a mindset to give importance to the lesson.
      </U>
      <Section></Section>
      <P>
        2. Did you find the lesson objectives or intended learning outcomes of the three (3) teacher SMART? Support your answer.
      </P>
      <U>
        Yes. Being able to be specific on what the lesson is all about, Measurable expectations to the students, Attainable
        learning competencies, Reliable as a teacher to be present when the students are having a problem and a time-bound topic
        lessons with this objectives the learning outcomes will be achieved.
      </U>
      <Section></Section>
      <P>
       3. Do SMART objectives help the lesson become more focused?
      </P>
      <U>
        Yes as it gives different path to the teacher to be more flexible based on their student needs and capabilities.
      </U>
      <Section></Section>
      <P>
        4. Were the lesson objectives / intended learning outcomes in the cognitive, psychomotor, and affective domains? 
        Support your answer.
      </P>
      <U>
        Yes, being able to identify the lesson objectives affects these domains to work more and identify the needs to be performed.
        It gives motivation specially to those students that are specialized to specific domains and perform better.
      </U>
      <Section></Section>
      <WorkImage src="/images/documents/table4.png" alt="Table" />
      <WorkImage src="/images/documents/table5.png" alt="Table" />

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
