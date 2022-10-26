import {
  Heading,
  Container,
  Divider,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { DocumentGridItem } from '../components/grid-item'

import logo from '../public/images/documents/logo.png'

const Documents = () => (
  <Layout title="Documents">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
          Field Study Documents Activties
      </Heading>

      <Section>
        <Divider my={6} />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <DocumentGridItem id="Activity_1" thumbnail={logo} title="Activity #1">
          </DocumentGridItem>
        </Section>

        <Section delay={0.2}>
          <DocumentGridItem
            id="Activity_2"
            title="Activity #2"
            thumbnail={logo}
          >
          </DocumentGridItem>
        </Section>

      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <DocumentGridItem id="Activity_3" thumbnail={logo} title="Activity #3">
          </DocumentGridItem>
        </Section>

        <Section delay={0.4}>
          <DocumentGridItem
            id="Activity_4"
            title="Activity #4"
            thumbnail={logo}
          >
          </DocumentGridItem>
        </Section>

      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <DocumentGridItem id="Activity_5" thumbnail={logo} title="Activity #5">
          </DocumentGridItem>
        </Section>

        <Section delay={0.6}>
          <DocumentGridItem
            id="Activity_6"
            title="Activity #6"
            thumbnail={logo}
          >
          </DocumentGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Documents
export { getServerSideProps } from '../components/chakra'
