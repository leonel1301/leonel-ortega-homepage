import NextLink from 'next/link';
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
} from '@chakra-ui/react';

const NotFound = (props) => {
    return (
        <Container>
            <Heading
                as="h1"
                size="3xl"
                mt="10"
                mb="5"
                display="flex"
                mx="auto"
                justifyContent="center"
            >
                4
                0
                4
            </Heading>
            <Text fontSize="xl" mb="5" align="center">
                The page that you are looking for does not exist
            </Text>
            <Divider my={6} />
            <Box align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFound;
