import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { GridItem, GridItemsStyle } from "../components/grid-item";
import lenaraLabs from "../public/images/posts/lenara-labs.png";
import pacman from "../public/images/works/pacman.webp";
import Section from "../components/section";

const Posts = () => {
  return (
    <Layout
      title="Posts"
      description="Updates, projects, and announcements by Leonel Ortega — including Lenara Labs and software development work."
    >
      <Container>
        <GridItemsStyle />
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4}>
            Popular Posts
          </Heading>
          <SimpleGrid columns={[1, 1, 1]} gap={6}>
            <GridItem
              title="Lenara Labs"
              thumbnail={lenaraLabs}
              href="https://lenaralabs.com/"
            >
              My new company focused on mobile app development and custom software
              solutions. We build high-quality applications for businesses and
              startups.
            </GridItem>
            <GridItem
              title="Pacman Game in C++"
              thumbnail={pacman}
              href="https://youtu.be/VwQY6-DPI9s"
              objectFit="cover"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
