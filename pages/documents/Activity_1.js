import {
  Container,
  Heading,
  Center,
  Divider,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkImage } from '../../components/work'
import { Title } from '../../components/documents'
import P from '../../components/paragraph'
import U from '../../components/underline'

const Document = () => (
  <Layout title="Activity #1">
    <Container>
      <Title>
        Activity #1
      </Title>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Activity Sheet #1</Center>
      </Heading>
      <P>
        Research the Lakandula school profile, investigate the facilities and support learning areas in the
        campus and in the classroom. Be guided by the following as you accomplish this task:
      </P>
      <Section></Section>
      <P>
        1. Carefully examine the school premises, accomplish the checklist as you go to the
        different school premises.
      </P>
      <P>
        2. Based on your checklist, write your observation report, and answer the guide
        questions.
      </P>
      <P>
        3. Make a reflection writing on the characteristics of a school environment that promote
        earning by answering the given question.
      </P>
      <P>
        4. For purposes of reliability, electronic outputs should be encoded using Century Gothic
        and font size is 12. Handwritten outputs should be rendered in print not in script.
      </P>
      <P>  
        5. You may add some facilities in the classroom that you think may affect the learning
        of the students.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Analysis
      </Heading>

      <P>
        1. What is the impact of the school campus and the classroom to the learning of the
        students?
      </P>
      <U>
        It gives the students and learners a mindset that learning on specific school
        campus services can be more engaging and interesting to work to. It also releases
        motivation to the said relevant students if they see each other which shares the same
        interest and discovering new things as they go inside their campuses or classroom.
      </U>
      <Section></Section>
      <P>
        2. Relate this to your knowledge in Child and Adolescent Development and Facilitating
        of Learning.
      </P>
      <U>
        With the facilities and services that a school gives, it exerts pleasure to the students as
        they are being rewarded on their everyday task they finish. Having this influence that
        is being inserted to the learner can be a huge addition to their understanding to
        explore more and be more active
      </U>

      <Heading as="h4" fontSize={16} my={6}>
        Reflection/Insights
      </Heading>      

      <P>
      1. Would you like to teach in the school you just observed? Why? Why not?
      </P>
      <U>
        Yes, because their environment feels to be more student friendly as different facilities
        are available and approachable in any time that we may need to use it. The staffs
        that surround the campus comfort different issues that makes the students feel at
        home. Giving them a peace of mind while studying can increase their motivational
        awareness to their given task without worrying of something else.
      </U>

      <Section></Section>

      <P>
        2. What characteristics of a school campus are conducive to learning?
      </P>
      <U>
        The characteristics that I found that is being conducive to learning are the different facilities
        that the campus provides for better learning experience for the students. Environment
        where full of school staff and facilitators that can be relied to anytime to answer the
        student&apos;s questions or clarifications. Security facilities that keep the school safe and
        away from distraction from outside sources and relies to the safety of the people
        inside the campus.
      </U>

      <Section></Section>

      <P>
        3. What characteristics of the classroom are conducive to learning?
      </P>
      <U>
        Depends on the classroom that tagets different learning competencies of the students that
        will be using the specific classroom. Especially colorful design that targets
        grade schoolers, quotes that gives motivational and behavioral part of the high
        schoolers.
      </U>

      <Section></Section>

      <P>
        4. As a future teacher, how can you make your classroom conducive to learning?
      </P>
      <U>
        By making the classroom environment feel home to the students where they can relax
        and only think about studying and learning at the same time to be more in their own
        self without the pressure of being a student. With it learning will be a easy task to be
        done and easily to receive feedback from the students about their experience inside
        the classroom.
      </U>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>SCHOOL FACILITIES CHECKLIST</Center>
      </Heading>  

      <P>
        I wasn&apos;t able to enter some of the facilities and take pictures inside 
        because of the confidentiality of the facility. But I was able to get 
        permission to take pictures of their front door office.
      </P>

      <Section></Section>

      <p>
        <Center>Office of the Principal</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_34.jpg" alt="Picture" />
      <P>
        From what I can observer outside, they are corridors which makes the Room
        more productive and papers are quite tidy around the room.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Library</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_63.jpg" alt="Picture" />
      <P>
        I wasn&apos;t able to enter their Library but I was able to peek inside of it
        and found different books that contains different books for different main
        subjects.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Counseling Room</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_39.jpg" alt="Picture" />
      <P>
        The Counseling Room was open but their facility is covered with
        different papers which makes the room unseeable from the outside.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Canteen / Cafeteria</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_35.jpg" alt="Picture" />
      <P>
        The Canteen of Lakandula is one of cleanest facility I&apos;ve seen 
        so far. It is also valuable for learning because of the wide 
        space of the area that can hold multiple sutdents at once.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Medical Clinic</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_40.jpg" alt="Picture" />
      <P>
        The Clinic is always ready and has the components and equipemnt
        that is ready to use incase of emergency.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Learning Resource Center</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_16.jpg" alt="Picture" />
      <P>
        This is where my room is located, where different equipments found
        for specific specialization.
      </P>
      <Section>
        <Divider my={6} />
      </Section>


      <p>
        <Center>Science Laboratory</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_43.jpg" alt="Picture" />
      <P>
        Their Science Laboratory found behind their building is on limits
        and no one is yet operating it because it is still in maintenance.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Gymnasium</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_03.jpg" alt="Picture" />
      <P>
        They have 2 main basketball court where some of the activities 
        takes space. They are big and can support multiple students, with
        the second gymnasium is still being constructed.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Home Economics Room</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_36.jpg" alt="Picture" />
      <P>
        There&apos;s no students or any facilitators found on the HE room
        currently but as I&apos;ve seen inside the different equipments is 
        tidy up.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Comfort Room for Boys</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_37.jpg" alt="Picture" />
      <P>
        Clean and well maintananced.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Comfort Room for Girls</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_38.jpg" alt="Picture" />
      <P>
        Clean and well maintananced.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Wall Display</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_07.jpg" alt="Picture" />
      <P>
        Different specialization design is on the wall display.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Teachers Table </Center>
      </p>
      <WorkImage src="/images/post/LKDHS_45.jpg" alt="Picture" />
      <P>
        Teachers&apos;s Table is well constructed and sturdy to use.
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Learner&apos;s Desks</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_32.jpg" alt="Picture" />
      <P>
        Learners&apos;s Desks are compost of two materials which are plastic
        chairs and wooden chairs that is being used on their respective
        uses
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Blackboard / Whiteboard</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_33.jpg" alt="Picture" />
      <P>
        Blackboard or Whiteboard are clean and no unnecessary
        scratches or holes
      </P>
      <Section>
        <Divider my={6} />
      </Section>

      <p>
        <Center>Learning Materials / Visual Aids</Center>
      </p>
      <WorkImage src="/images/post/LKDHS_45.jpg" alt="Picture" />
      <P>
        Learning Materials or Visual Aids such as computers, projector
        and handwritten visual aids are well available.
      </P>
      <Section>
        <Divider my={6} />
      </Section>


    </Container>
  </Layout>
)

export default Document
export { getServerSideProps } from '../../components/chakra'
