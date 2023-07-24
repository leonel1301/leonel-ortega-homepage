import { Box, Container, AspectRatio } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../footer';

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    name="description"
                    content="Leonel Ortega's personal website"
                />
                <meta name="author" content="Leonel Ortega" />
                <meta
                    name="keywords"
                    content="Leonel Ortega, personal website, Portfolio website, leo_omg"
                />
                <meta name="robots" content="all" />
                <link rel="icon" href="/leonel.ico" />
                <title>Leonel Ortega - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container.sm" pt={14} position="relative">
                <AspectRatio maxW="600px" ratio={2} my={4} mx="auto">
                    <Image
                        src="/images/coder.gif"
                        alt="Robot coding with a cat gif"
                        width={150}
                        height={60}
                        style={{
                            display: 'block',
                            margin: 'auto',
                            border: '3px solid gray',
                            borderRadius: '10px',
                          }}
                        loading="eager"
                    />
                </AspectRatio>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;
