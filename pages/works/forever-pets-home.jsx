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

const ForeverPetsHome = () => {
  return (
    <Layout title="Forever Pets Home Rest API">
      <Container>
        <Title>
          Forever Pets Home
          <Badge ml={2}>2024</Badge>
        </Title>
        <Paragraph>
          <b>Forever Pets Home API</b> allows users to log
          in and obtain a JWT token for secure access. With this token, users
          can post, edit, or delete pet adoption listings. The API is designed
          to simplify the management of pet adoptions, ensuring secure and
          efficient interactions. It includes functionalities such as user
          authentication, token-based access control, and full CRUD operations
          (Create, Read, Update, Delete) for pet listings.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/leonel1301/forever-pets-home-api"
              isExternal
            >
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            C#, .NET Framework, JWT Token, Clean Architecture
          </ListItem>
        </List>
        <WorkImage src="/images/works/rest-api-2.png" alt="Forever Pets Home" />
        <WorkImage src="/images/works/rest-api-3.png" alt="Forever Pets Home" />
      </Container>
    </Layout>
  );
};

export default ForeverPetsHome;
