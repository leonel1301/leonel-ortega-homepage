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
        <Layout title="Study Up Landing Page">
            <Container>
                <Title>
                    Study Up Landing Page
                    <Badge ml={2}>2022</Badge>
                </Title>
                <Paragraph>
                Landing page of a fictitious company "Study Up", made with Boostrap 4 and
                is fully responsive.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://carloshernandezll.github.io/TF_IHC/TF_YouLearn/public/index.html"
                            isExternal
                        >
                            study-up <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/leonel1301/StudyUp-LandingPage"
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
                    src="/images/works/studyUp_01.png"
                    alt="Study Up Landing Page"
                />
                <WorkImage
                    src="/images/works/studyUp_02.png"
                    alt="Study Up Landing Page"
                />
                <WorkImage
                    src="/images/works/studyUp_03.png"
                    alt="Study Up Landing Page"
                />
                <WorkImage
                    src="/images/works/studyUp_04.png"
                    alt="Study Up Landing Page"
                />
                <WorkImage
                    src="/images/works/studyUp_05.png"
                    alt="Study Up Landing Page"
                />
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
