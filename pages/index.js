import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, This is my e-portfolio!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Justine Ryan De Guia
          </Heading>
          <p>Universidad de Manila Student ( Tech Enthusiast )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          Justine is currently taking Bachelor Bachelor of Technical-Vocational Teacher Education major 
          in Computer Programming technology a 4 year course at Universidad de Manila. Being exposed to 
          technology since little, he just can&apos;t stop thinking of a work to do and develop something new 
          that can help him on the path he chosen.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in San Jose Del Monte, Bulacan.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated TVL-ICT Senior High School at Arellano Univeristy 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        <Link href="https://open.spotify.com/user/csapawn" target="_blank">
          Music
        </Link>
          , {' '}
          <Link href="https://www.instagram.com/lolimouto01/" target="_blank">
          Photography
          </Link>
          , {' '}
          <Link href="https://github.com/Universidad-De-Manila-Automation" target="_blank">
          Machine Learning
          </Link>
          , {' '}
          <Link href="https://github.com/Kitsunejasutin" target="_blank">
          Coding
          </Link>
          , and Watching {' '}
          <Link href="https://anilist.co/user/tokatsu/" target="_blank">
          Anime
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Kitsunejasutin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Kitsunejasutin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/kitsunejasutin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @Justine Ryan J. De Guia
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/lolimouto01" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @lolimouto01
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/lolimouto01/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @lolimouto01
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://youtu.be/zpn6DJTK4NE"
            title="All about me!"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://youtu.be/cxgyggExxvw"
            title="JellyBot"
            thumbnail={thumbInkdrop}
          >
            A Arduino Project
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View Works
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
