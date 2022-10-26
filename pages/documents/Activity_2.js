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
  
  <Layout title="Activity #2">
    <Container>
      <Title>
        Activity #2
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #2</Center>
      </Heading>
      <P>
        Watch a video on how a group of learners from different levels (Preschool, Elementary and
        High School) behave in the classroom. Be guided by the following as you accomplish this
        task:
      </P>
      <Section></Section>
      <P>
        1. Carefully examine the video, notice the different characteristics of the student in
        each level.
      </P>
      <P>
        2. Record the data you gathered in the Learner&apos;s Development Matrix. This will allow
        you to compare the characteristics and needs of learners at different levels.
      </P>
      <P>
        3. In the analysis part, write the most salient development characteristics of learners you
        notice. Based on this characteristic, think of some implications for the teacher. The first
        part is done as your sample.
      </P>
      <P>
        4. Make a reflection on the characteristics of learners at different levels by answering
        the given questions.
      </P>
      <P>
        5. For purposes of reliability, electronic outputs should be encoded using Century Gothic
        font size 12. Handwritten outputs should be rendered in print not in script.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Reflection/Insights:
      </Heading>

      <P>
        1. While you are observing the learners, did you recall your own experiences when you
        were their age? What similarities or differences do you have with the learners you
        observed?
      </P>
      <U>
        Yes, especially the short attention span of the learners on grade school and high school
        which tends to know as their mind is still in younger states where they are still finding the
        real reason on why they are studying. On the High School range, they are more attentive
        than the other ranges and it&apos;s the direct opposite of my experience which tend to get
        attracted to non-essential things while inside of the classroom.
      </U>

      <Section></Section>

      <P>
        2. Think of the teacher you cannot forget, either positive or negative. How did she/he help
        or not help you with your development (physical, social, emotional, and cognitive)? How
        did it affect you?
      </P>
      <U>
        It affects me on every single development as they are basically my second mother
        which I entrust my knowledge and skills that I will obtained while listening to them.
        Trusting people tends to develop engagement to that person and having them to teach
        you basic needs or knowledge those will intact to our minds as we group up.
      </U>

       <Section></Section>

      <WorkImage src="/images/documents/table1.png" alt="Table" />

      <Section></Section>
      <Section>
        <Divider my={6} />
      </Section>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
