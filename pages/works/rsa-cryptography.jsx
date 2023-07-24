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
        <Layout title="RSA Cryptography">
            <Container>
                <Title>
                    RSA Cryptography
                    <Badge ml={2}>2022</Badge>
                </Title>
                <Paragraph>
                RSA decryption tool that allows users to encode and decrypt encrypted messages. 
                The tool is available to all users who want to decrypt or encode messages.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://u202110085.github.io/U202110085.github.io-criptografia/"
                            isExternal
                        >
                            rsa-cryptography <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link
                            href="https://github.com/U202110085/TP-Criptografia-RSA"
                            isExternal
                        >
                            Github <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        HTML, CSS, JS
                    </ListItem>
                </List>
                <WorkImage
                    src="/images/works/criptografia-rsa_01.png"
                    alt="RSA Cryptography"
                />
                <WorkImage
                    src="/images/works/criptografia-rsa_03.png"
                    alt="RSA Cryptography"
                />
                <WorkImage
                    src="/images/works/criptografia-rsa_02.png"
                    alt="RSA Cryptography"
                />
                <WorkImage
                    src="/images/works/criptografia-rsa_04.png"
                    alt="RSA Cryptography"
                />
            </Container>
        </Layout>
    );
};

export default LeadYourWay;
