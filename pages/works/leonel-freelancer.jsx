import { WorkImage, Meta, Title } from '../../components/work';
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const LeadYourWay = () => {
    return (
        <Layout title="Leonel Ortega Freelancer">
            <Container>
                <Title>
                    Leonel Ortega Freelancer
                    <Badge ml={2}>2022</Badge>
                </Title>
                <Paragraph>
                This landing page is about my service as a freelancer,
                it was developed as practice to improve my HTML and CSS skills
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/leonel1301/webapp_freelancer"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://first-webapp-freelancer.netlify.app/"
                            isExternal
                        >
                            webapp-freelancer <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        HTML, CSS
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/freelancer-landing-page-01.png"
                    alt="Lead Your Way"
                />
                <WorkImage
                    src="/images/works/freelancer-landing-page-02.png"
                    alt="Lead Your Way"
                />
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
