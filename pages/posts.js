import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbplkdhs01 from '../public/images/post/LKDHS_00.png'
import thumbplkdhs04 from '../public/images/post/LKDHS_04.png'
import thumbplkdhs06 from '../public/images/post/LKDHS_06.jpg'

const Posts = () => (
  <Layout title="Post">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Field Study 1 and its activities
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
        <Section>
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
        <Section>
          <WorkGridItem id="October-10_2022" thumbnail={thumbplkdhs06} title="October 10, 2022">
            Activity Post
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
