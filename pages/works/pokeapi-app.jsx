import { WorkImage, Meta, Title } from "../../components/work";
import {
  Container,
  Badge,
  AspectRatio,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const PokeApp = () => {
  return (
    <Layout title="PokéApp - React Frontend">
      <Container>
        <Title>
          PokéApp
          <Badge ml={2}>2024</Badge>
        </Title>
        <Paragraph>
          <b>PokéApp</b> is a frontend application built with React, Vite, and
          Next.js, designed to interact with the PokéAPI. This app allows users
          to browse, search, and view detailed information about various
          Pokémon. The PokéApp efficiently fetches data from the API, providing
          users with a fast and seamless experience. It features dynamic
          routing, fast loading times, and a responsive UI, making it an ideal
          tool for Pokémon enthusiasts to explore and learn more about their
          favorite creatures.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://react-pockeapi-ibumum3ne-leonel1301s-projects.vercel.app"
              isExternal
            >
              poke-app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/leonel1301/react-pockeapi"
              isExternal
            >
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, React.js
          </ListItem>
        </List>
        <WorkImage src="/images/works/pokeapi.png" alt="Forever Pets Home" />
        <WorkImage src="/images/works/pokeapi_2.png" alt="Forever Pets Home" />
      </Container>
    </Layout>
  );
};

export default PokeApp;
