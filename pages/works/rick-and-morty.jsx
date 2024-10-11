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

const RickAndMorty = () => {
  return (
    <Layout title="RickAndMortyApp - Vue Frontend">
      <Container>
        <Title>
          RickAndMortyApp
          <Badge ml={2}>2024</Badge>
        </Title>
        <Paragraph>
          <b>RickAndMortyApp</b> is a frontend application built with Vue.js,
          designed to consume the Rick and Morty API. This app allows users to
          explore characters, episodes, and locations from the popular TV show.
          By leveraging Vue's reactive UI and efficient data fetching, users can
          easily search, filter, and browse through detailed information about
          their favorite characters. The app features smooth navigation, fast
          loading times, and a responsive design, making it an excellent tool
          for fans of the show.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/leonel1301/Rick-and-Morty-API"
              isExternal
            >
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, Vue
          </ListItem>
        </List>
        <WorkImage src="/images/works/rick-and-morty-1.png" alt="Rick and Morty App" />
        <WorkImage src="/images/works/rick-and-morty-2.png" alt="Rick and Morty App" />
      </Container>
    </Layout>
  );
};

export default RickAndMorty;
