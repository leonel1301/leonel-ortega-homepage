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
        <Layout title="Lead Your Way">
            <Container>
                <Title>
                    Lead Your Way
                    <Badge ml={2}>2022</Badge>
                </Title>
                <Paragraph>
                    Lead Your Way is a landing page for a fictional company that
                    provides a service to rent out bikes. The landing page is
                    built with Bootstrap 4 and is fully responsive.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://olivertuesta.github.io/lead-your-way/"
                            isExternal
                        >
                            lead-your-way <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://olivertuesta.github.io/lead-your-way/"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        Bootstrap 4, HTML, CSS
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/lead-your-way_01.png"
                    alt="Lead Your Way"
                />
                <WorkImage
                    src="/images/works/lead-your-way_02.png"
                    alt="Lead Your Way"
                />
                <WorkImage
                    src="/images/works/lead-your-way_03.png"
                    alt="Lead Your Way"
                />
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/b3r0UlN-JkY?start=369"
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
