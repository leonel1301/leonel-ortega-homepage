import { Container, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { GridItem, GridItemsStyle } from "../components/grid-item";
import rickandmorty from "../public/images/works/pacman.webp";
import Section from "../components/section";

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <GridItemsStyle />
        <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            title="Pacman Game in C++"
            thumbnail={rickandmorty}
            href="https://youtu.be/VwQY6-DPI9s"
          />
        </SimpleGrid>
      </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
