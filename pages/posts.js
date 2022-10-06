import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbplaceholder from '../public/images/post/inkdrop_eyecatch.png'

const Posts = () => (
  <Layout title="Post">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Post
      </Heading>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbplaceholder} title="Placeholder Title">
            Placeholder subtitle
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
