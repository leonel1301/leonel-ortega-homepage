import { Box, Container, AspectRatio } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.sm" pt={14} position="relative">
        <AspectRatio maxW="600px" ratio={2} my={4} mx="auto">
          <Image
            src="/images/coder.gif"
            alt="Animated coding illustration"
            width={150}
            height={60}
            style={{
              display: "block",
              margin: "auto",
              border: "3px solid gray",
              borderRadius: "10px",
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
