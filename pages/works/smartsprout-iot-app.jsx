import { WorkImage, Meta, Title } from "../../components/work";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const LeadYourWay = () => {
  return (
    <Layout title="SmartSprout IoT App">
      <Container>
        <Title>
          SmartSprout IoT App
          <Badge ml={2}>2024</Badge>
        </Title>
        <Paragraph>
          <b>SmartSprout</b> is an IoT-based application designed to monitor the
          temperature and humidity of agricultural fields. It allows users to
          manage irrigation systems, adjusting the water drippers based on
          real-time environmental data. The frontend is built with React, while
          the backend is powered by Java. The IoT development is integrated
          using Wokwi, ensuring precise control and automation of field
          conditions for optimized crop management.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/orgs/SmartSprout-IOT/repositories"
              isExternal
            >
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Wokwi, React, Nextjs, Java, Spring Boot, Arduino
          </ListItem>
        </List>
        <WorkImage src="/images/works/smartsprout-1.jpg" alt="Smartsprout" />
        <WorkImage src="/images/works/smartsprout-2.png" alt="Lead Your Way" />
        <WorkImage src="/images/works/smartsprout-3.jpg" alt="Lead Your Way" />
        <WorkImage src="/images/works/smartsprout-4.jpg" alt="Lead Your Way" />
        <WorkImage src="/images/works/smartsprout-5.jpg" alt="Lead Your Way" />
      </Container>
    </Layout>
  );
};

export default LeadYourWay;
