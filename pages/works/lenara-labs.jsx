import { Meta, Title } from '../../components/work';
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const LenaraLabs = () => {
    return (
        <Layout title="Lenara Labs">
            <Container>
                <Title>
                    Lenara Labs
                    <Badge ml={2}>2026</Badge>
                </Title>
                <Paragraph>
                    Lenara Labs is my software development company focused on building
                    mobile applications and custom software solutions. We help businesses
                    and startups turn ideas into high-quality, scalable products.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://lenaralabs.com/" isExternal>
                            lenaralabs.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Services</Meta>
                        Mobile app development, custom software, product engineering
                    </ListItem>
                </List>
                <AspectRatio maxW="640px" ratio={1024 / 558} my={4} mx="auto">
                    <Image
                        src="/images/posts/lenara-labs.png"
                        alt="Lenara Labs logo"
                        className="grid-item-image"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </AspectRatio>
            </Container>
        </Layout>
    );
};

export default LenaraLabs;
