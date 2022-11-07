import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbplkdhs01 from '../public/images/post/LKDHS_00.png'
import thumbplkdhs04 from '../public/images/post/LKDHS_04.png'
import thumbplkdhs06 from '../public/images/post/LKDHS_06.jpg'
import thumbplkdhs18 from '../public/images/post/LKDHS_18.jpg'
import thumbplkdhs23 from '../public/images/post/LKDHS_23.jpg'
import thumbplkdhs27 from '../public/images/post/LKDHS_27.jpg'
import thumbplkdhs46 from '../public/images/post/LKDHS_46.jpg'
import thumbplkdhs56 from '../public/images/post/LKDHS_56.jpg'

const Posts = () => (
  <Layout title="Post">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Field Study 1 Experience
      </Heading>

      <Section>
        <Divider my={6} />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="September-26_2022" thumbnail={thumbplkdhs01} title="September 26, 2022">
            Activity Post
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="October-3_2022"
            title="October 3, 2022"
            thumbnail={thumbplkdhs04}
          >
            Activity Post
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="October-10_2022" thumbnail={thumbplkdhs06} title="October 10, 2022">
            Activity Post
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="October-12_2022" thumbnail={thumbplkdhs18} title="October 12, 2022">
            Activity Post
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="October-14_2022" thumbnail={thumbplkdhs23} title="October 14, 2022">
            Activity Post
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="October-17_2022" thumbnail={thumbplkdhs27} title="October 17, 2022">
            Activity Post
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="October-19_2022" thumbnail={thumbplkdhs46} title="October 19, 2022">
            Activity Post
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="October-21_2022" thumbnail={thumbplkdhs56} title="October 21, 2022">
            Activity Post
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
