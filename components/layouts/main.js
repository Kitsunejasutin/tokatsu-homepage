import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justine's E-Portfolio" />
        <meta name="author" content="Justine Ryan J. De Guia" />
        <meta name="author" content="Tomkatsu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Justine Ryan J. De Guia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lolimouto01" />
        <meta name="twitter:creator" content="@lolimouto01" />
        <meta name="twitter:image" content="https://i.ibb.co/BZjWCyf/image.png" />
        <meta property="og:site_name" content="Justine Ryan J. De Guia" />
        <meta name="og:title" content="Justine Ryan J. De Guia" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/BZjWCyf/image.png" />
        <title>Justine Ryan J. De Guia</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
