import { WorkImage, Meta, Title } from '../../components/work';
import {
    Container,
    Badge,
    AspectRatio,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const LeadYourWay = () => {
    return (
        <Layout title="Extinct Hero">
            <Container>
                <Title>
                    Extinct Hero
                    <Badge ml={2}>2021</Badge>
                </Title>
                <Paragraph>
                <b>Extinct Hero</b> is a 2D video game developed with C++ and Visual Studio. 
                The game promotes the idea of saving endangered species through a fun and engaging 
                experience. In the game, the player takes on the role of a hero who must protect 
                endangered species from hunters. The player can collect coins to slow down enemies. 
                This project was completed for university.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/leonel1301/ExtinctHero-Game"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        C++, Visual Studio 2019
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/extinct-hero_01.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_02.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_03.png"
                    alt="Extinct Hero"
                />
                <WorkImage
                    src="/images/works/extinct-hero_04.png"
                    alt="Extinct Hero"
                />
                
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/72WUrp0dRNY?start=369"
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
