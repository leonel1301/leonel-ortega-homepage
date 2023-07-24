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
        <Layout title="Lead Your Way Open Source Version">
            <Container>
                <Title>
                    Lead Your Way Open Source Version
                    <Badge ml={2}>2022</Badge>
                </Title>
                <Paragraph>
                Website of a fictitious company "Lead Your Way", made with Angular as the 
                frontend framework and Spring Boot Framework on the Backend side, security 
                was implemented and deployed on the web.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://lead-your-way-opensource-3093c.web.app/home"
                            isExternal
                        >
                            lead-your-way <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/lucas1336/LeadYourWay-OpenSource"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        Bootstrap 4, Angular Material, HTML, CSS, TS, Angular, Spring Boot Framework, MySQL
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/lead-your-way_01_os.png"
                    alt="Lead Your Way"
                />
                <WorkImage
                    src="/images/works/lead-your-way_02_os.png"
                    alt="Lead Your Way"
                />
                <WorkImage
                    src="/images/works/lead-your-way_03_os.png"
                    alt="Lead Your Way"
                />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/iAh57LOrm10"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
