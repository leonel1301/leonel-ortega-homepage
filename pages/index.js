import NextLink from 'next/link';
import NextImage from 'next/image';
import {
    Box,
    Button,
    Container,
    Heading,
    useColorModeValue,
    Link,
    ListItem,
    List,
    Divider,
    Stack,
    HStack,
    Icon,
    Text,
    Center,
    SimpleGrid,
} from '@chakra-ui/react';
import Section from '../components/section';
import { FaCode, 
         FaDatabase, 
         FaLaptopCode, 
         FaGraduationCap, 
         FaMobileAlt , 
         FaUsers, 
         FaUserCheck, 
         FaClipboardList,
         FaPuzzlePiece,
         FaChartLine,
         FaChalkboardTeacher,
         FaServer,
         FaFileWord, 
         FaThumbsUp,
         FaPushed,
         FaCubes,
         FaBug
        } from 'react-icons/fa';
import {GiSprint} from 'react-icons/gi';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import SocialLink from '../components/social-link';


import { IoLogoTwitter, IoLogoGithub, IoMdMail, IoLogoLinkedin } from 'react-icons/io';


import Layout from '../components/layouts/article';

const Home = () => {
    return (
        <Layout>
            <Container maxW="container.md">
                <Box
                    borderRadius="10"
                    bg={useColorModeValue('orange.100', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hi, I&apos;m a software engineering student.
                </Box>
                <Box display={{ sm: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Leonel Ortega
                        </Heading>
                        <p>Developer and fan of gamer computers in my spare time</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ sm: 6 }} align="center">
                        <Box
                            borderColor={useColorModeValue('white', 'whiteAlpha.900')}
                            borderWidth={3}
                            borderStyle="solid"
                            borderRadius="full"
                            overflow={'hidden'}
                            width="150px"
                            height="150px"
                            bg={useColorModeValue('green.500', 'green.200')}
                            position="relative"
                        >
                            <NextImage
                                display="inline-block"
                                src="/images/leoomg.jpg"
                                width={150}
                                height={150}
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Paragraph>
                    I am a Software Engineering student based in Lima, Peru. My passion for computers and music
                    has driven me to pursue a career in this field. When I'm not immersed in coding, I enjoy solving
                    the Rubik's Cube and exploring the world of literature through books.
                    As a software enthusiast, I am highly motivated to apply my knowledge and skills to the ever-evolving
                    field of software engineering. I believe in the power of continuous learning and strive to expand my 
                    horizons in this dynamic industry.
                    I am excited about the endless possibilities and challenges that come with being a software engineer,
                    and I am committed to making a positive impact through innovative solutions. Let's connect and embark 
                    on this incredible journey together!

                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue" mr={4}>
                                Portfolio
                            </Button>
                        </NextLink>
                        <NextLink href="mailto:leopardo.jair@gmail.com">
                            <Button rightIcon={<IoMdMail />} colorScheme="green">
                                Contact
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Lima, Peru
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>My first class of Software Engineering
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - present</BioYear>
                        Studying Software Engineering at{' '}
                        <Link href='https://upc.edu.pe/'  isExternal>
                            Universidad Peruana de Ciencias Aplicadas
                        </Link>
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        Hackathons, Web Development, Machine Learning 
                        and Cybersecurity.
                    </Paragraph>
                </Section>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Education
                    </Heading>
                    <BioSection>
                        <BioYear>2016 - 2020</BioYear>
                        <Link href='https://www.facebook.com/cetiandahuasisayan/'  isExternal>
                            I.E Andahuasi
                        </Link>
                        <Paragraph>
                        I finished school achieving the highest tenth in my entire student life, 
                        I participated in national competitions such as ONEM and Ideas in action of MINEDU
                        where in both I managed to go to the national stage.
                        </Paragraph>
                    </BioSection>

                    <Section delay={0.2}>
                        <Divider my={6} />
                    </Section>

                    <BioSection>
                        <BioYear>2021 - 2022</BioYear>
                            Bachelors Degree Semesters: I and II at {' '}
                            <Link href='https://upc.edu.pe/'  isExternal>
                                UPC
                            </Link>
                            <Paragraph>
                            During my first year, I learned the basics of programming and how to use 
                            different tools such as IDEs and object-oriented programming. I also reinforced 
                            basic knowledge such as language, math and soft skills.
                            </Paragraph>
                    </BioSection>

                    <Section delay={0.2}>
                        <Divider my={6} />
                    </Section>

                    <BioSection>
                        <BioYear>2022 - 2023</BioYear>
                            Bachelors Degree Semesters: III and IV at {' '}
                            <Link href='https://upc.edu.pe/'  isExternal>
                                UPC
                            </Link>
                            <Paragraph>
                            In my second year I have taken subjects such as: Computer Architecture, 
                            Computational Mathematics, Algorithms, Databases, Scrum Methodology, etc. 
                            With this knowledge I have participated in work teams to develop university 
                            projects using various methodologies.
                            </Paragraph>
                    </BioSection>

                    <Section delay={0.2}>
                        <Divider my={6} />
                    </Section>

                    <BioSection>
                        <BioYear>2023 - Current</BioYear>
                            Bachelor Degree Semester: V at {' '}
                            <Link href='https://upc.edu.pe/'  isExternal>
                                UPC
                            </Link>
                            <Paragraph>
                            I have finished my 5th semester at the university and thanks to the knowledge 
                            of databases, ihc and software patterns, in this semester I was able to learn 
                            frameworks for both frontend and backend. In the course of Open Source Applications 
                            I learned Angular, TS and Spring Boot Framework, on the side of Web Applications I 
                            learned Vue, Js and C.NET Framework. It was a semester of a lot of knowledge.
                            </Paragraph>
                    </BioSection>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Knowledge
                        </Heading>
                        <SimpleGrid columns={[2, 3, 3]} gap={6}>
                            <Box>
                                <FaMobileAlt size={30}/>
                                <Text mt={2}>HCI and Mobile Interactions</Text>
                            </Box>
                            <Box>
                                <FaDatabase size={30}/>
                                <Text mt={2}>Database Designs</Text>
                            </Box>
                            <Box>
                                <FaCubes size={30}/>
                                <Text mt={2}>Algorithms and Data Structures</Text>
                            </Box>
                            <Box>
                                <FaPuzzlePiece size={30}/>
                                <Text mt={2}>Software Patterns Designs</Text>
                            </Box>
                            <Box>
                                <FaChartLine size={30}/>
                                <Text mt={2}>Computer Architecture</Text>
                            </Box>
                            <Box>
                                <FaChalkboardTeacher size={30}/>
                                <Text mt={2}>Scrum Fundamentals Certified</Text>
                            </Box>
                            <Box>
                                <FaServer size={30}/>
                                <Text mt={2}>Backend</Text>
                            </Box>
                            <Box>
                                <FaCode size={30}/>
                                <Text mt={2}>Frontend</Text>
                            </Box>
                            <Box>
                                <FaBug size={30}/>
                                <Text mt={2}>Cybersecurity</Text>
                            </Box>
                        </SimpleGrid>
                    </Section>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Skills
                        </Heading>
                        <Stack>
                            <HStack>
                                <Icon as={FaCode} color="teal.500" boxSize={6} />
                                <Paragraph>
                                    Web Development: HTML, CSS, JavaScript, Angular, Vue, React.
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaDatabase} color="teal.500" boxSize={6} />
                                <Paragraph>
                                    Database: SQL, MongoDB, Firebase, etc.
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaLaptopCode} color="teal.500" boxSize={6} />
                                <Paragraph>
                                    Programming Languages: Python, Java, C++, C#, TS y JS.
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaGraduationCap} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Fast Learner
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaUsers} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Team Work
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaUserCheck} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Independant
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaClipboardList} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Organized
                                </Paragraph>
                            </HStack>

                            <HStack>
                                <Icon as={FaFileWord} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Microsoft Office
                                </Paragraph>
                            </HStack>
                            
                            <HStack>
                                <Icon as={FaThumbsUp} color="blue.400" boxSize={6} />
                                <Paragraph>
                                    Responsible and reliable
                                </Paragraph>
                            </HStack>

                        </Stack>
                    </Section>

                </Section>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Social Links
                    </Heading>
                    <List display="flex" flexWrap="wrap">
                        <ListItem>
                            <SocialLink
                                href="https://www.linkedin.com/in/leonel-alessandro-ortega-espinoza-168680225/"
                                Icon={<IoLogoLinkedin />}
                            >
                                @leonelOrtega
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://github.com/leonel1301"
                                Icon={<IoLogoGithub />}
                            >
                                @leonel1301
                            </SocialLink>
                        </ListItem>
                        <ListItem>
                            <SocialLink
                                href="https://twitter.com/leoo_omgg"
                                Icon={<IoLogoTwitter />}
                            >
                                @leoo_omgg
                            </SocialLink>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;
