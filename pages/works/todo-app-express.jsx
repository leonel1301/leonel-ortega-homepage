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

const TodoApp = () => {
  return (
    <Layout title="Todo App Rest Api">
      <Container>
        <Title>
          Todo App
          <Badge ml={2}>2024</Badge>
        </Title>
        <Paragraph>
          <b>Todo App</b> is a REST API built with Node.js and Express that
          allows users to log in and obtain a JWT token for secure access. With
          this token, users can manage their tasks by creating, editing,
          updating the status, or deleting them as needed. The API is designed
          to provide a simple yet powerful tool for task management, offering
          secure and efficient interactions through token-based authentication
          and full CRUD functionality (Create, Read, Update, Delete) for tasks.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/leonel1301/todo-app"
              isExternal
            >
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Javascript, NodeJs, Express, JWT Token
          </ListItem>
        </List>
        <WorkImage src="/images/works/todo-app-1.png" alt="Todo App Api" />
        <WorkImage src="/images/works/todo-app-2.png" alt="Todo App Api" />
      </Container>
    </Layout>
  );
};

export default TodoApp;
