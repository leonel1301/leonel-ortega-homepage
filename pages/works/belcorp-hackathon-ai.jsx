import { WorkImage, Meta, Title, PhoneImage } from "../../components/work";
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

const BelcorpApp = () => {
  return (
    <Layout title="Belcorp App">
      <Container>
        <Title>
          Bella
          <Badge ml={2}>2024</Badge>
          <Badge color={"#90CDF4"} ml={2}>
            Hackathon
          </Badge>
        </Title>
        <Paragraph>
          <b>Bella</b> is an AI-powered bot that provides personalized product
          recommendations to customers, such as lipsticks, based on the context
          and situations the customer shares with the bot. The bot analyzes this
          information and, using AI, suggests Belcorp products. It then asks the
          customer if they would like to see an image of themselves wearing the
          recommended product. With machine learning and trained models, the bot
          processes the image and shares it with the customer.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Achievement</Meta>
            Top 6 globally in Belcorp's Hackathon 2024
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/somos-el-grupo-5" isExternal>
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Python, Flask, NodeJs, OpenAi Api, FaceParsing, PyTorch
          </ListItem>
        </List>
        <PhoneImage src="/images/works/bella-cap-1.jpg" alt="Bella" />
        <PhoneImage src="/images/works/bella-cap-2.jpg" alt="Bella" />
        <PhoneImage src="/images/works/bella-cap-3.jpg" alt="Bella" />
      </Container>
    </Layout>
  );
};

export default BelcorpApp;
