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
    SimpleGrid,
} from '@chakra-ui/react';
import Section from '../components/section';
import {
    FaCode,
    FaDatabase,
    FaMobileAlt,
    FaPuzzlePiece,
    FaServer,
    FaRobot,
    FaCloud,
    FaMicrochip,
    FaProjectDiagram,
    FaFlask,
    FaTasks,
    FaCheckDouble,
    FaAward,
    FaGlobe,
} from 'react-icons/fa';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear, ProfessionSection } from '../components/bio';
import SocialLink from '../components/social-link';


import { IoLogoTwitter, IoLogoGithub, IoMdMail, IoLogoLinkedin } from 'react-icons/io';


import Layout from '../components/layouts/article';
import AditionalSection from '../components/aditional';

const Home = () => {
    const bannerBg = useColorModeValue('orange.100', 'whiteAlpha.200');
    const avatarBorderColor = useColorModeValue('white', 'whiteAlpha.900');
    const avatarBg = useColorModeValue('green.500', 'green.200');

    return (
        <Layout>
            <Container maxW="container.md">
                <Box
                    borderRadius="10"
                    bg={bannerBg}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hi, I&apos;m a Software Engineer.
                </Box>
                <Box display={{ sm: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Leonel Ortega
                        </Heading>
                        <p>Full-stack developer building scalable applications with .NET, React, Python, and cloud technologies</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ sm: 6 }} align="center">
                        <Box
                            borderColor={avatarBorderColor}
                            borderWidth={3}
                            borderStyle="solid"
                            borderRadius="full"
                            overflow={'hidden'}
                            width="150px"
                            height="150px"
                            bg={avatarBg}
                            position="relative"
                        >
                            <NextImage
                                display="inline-block"
                                src="/images/leoomg.jpg"
                                alt="Portrait of Leonel Ortega"
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
                        I am a Software Engineer based in Lima, Peru, with experience building full-stack and
                        AI-powered applications across enterprise environments. I have worked with C#/.NET, React,
                        Python, Django, Go, and cloud platforms such as Azure and AWS, delivering production-ready
                        systems including RESTful APIs, microservices, and mobile apps.
                        When I&apos;m not coding, I enjoy solving the Rubik&apos;s Cube and exploring literature.
                        I believe in continuous learning and am committed to building innovative solutions that make
                        a positive impact. Let&apos;s connect!
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
                        <BioYear>2021 - 2026</BioYear>
                        Software Engineering at{' '}
                        <Link href='https://upc.edu.pe/' isExternal>
                            Universidad Peruana de Ciencias Aplicadas
                        </Link>
                        . Ranked in the top fifth of my college career.
                    </BioSection>
                    <BioSection>
                        <BioYear>october, 2023</BioYear>First job! <Link href='https://x.com/search?q=%23primerachamba&src=typed_query' isExternal>#primerachamba</Link>
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
                        Experience
                    </Heading>
                    <BioSection>
                        <BioYear>January, 2026 - present</BioYear>
                        <ProfessionSection>Software Engineer</ProfessionSection>
                        <Link href='https://www.wisetechglobal.com/' isExternal>
                            Wisetech Global
                        </Link>
                        <Paragraph>
                            Designed and implemented an AI-Assisted Issue Resolution System for the legacy TMRail Web
                            application, enabling contextual bug reporting and automated remediation workflows using
                            Python and Azure AI services. Built a production-grade .NET web service (RoutingBuilder)
                            that processes large SQL Server datasets with parallel processing techniques. Integrated
                            Test-Driven Development practices into TM Rail applications, reducing defects during QA
                            cycles and improving long-term code quality.
                        </Paragraph>
                        <AditionalSection>Key Technologies: C#, .NET, Python, Azure AI, SQL Server, TDD, Task Parallel Library.</AditionalSection>
                    </BioSection>
                    <BioSection>
                        <BioYear>April, 2025 - December, 2025</BioYear>
                        <ProfessionSection>Associate Software Engineer</ProfessionSection>
                        <Link href='https://www.e2open.com/' isExternal>
                            e2open
                        </Link>
                        <Paragraph>
                            Built AI-assisted prototypes in Go integrating OpenAI APIs to transform business rules into
                            structured system-ready data. Led the migration of legacy Windows services to .NET 9 for a
                            U.S. railroad sector client and modernized the TMRail Web application, achieving a 90%
                            reduction in session-related issues through Azure services and architectural improvements.
                        </Paragraph>
                        <AditionalSection>Key Technologies: Go, OpenAI APIs, .NET 9, Azure, legacy modernization.</AditionalSection>
                    </BioSection>
                    <BioSection>
                        <BioYear>October, 2024 - April, 2025</BioYear>
                        <ProfessionSection>Full Stack Developer</ProfessionSection>
                        <Link href='https://latam.tivit.com' isExternal>
                            Tivit Latam
                        </Link>
                        <Paragraph>
                            Developed RESTful APIs with Django Rest Framework and Python. Built a native iOS app for
                            Antamina&apos;s transport system using Swift, SwiftUI, and VIPER architecture, including
                            chatbot integrations. Designed a web application for employee performance tracking with
                            Next.js, React, and Django, improving reporting efficiency by 80%. Built new modules for
                            the ISMX App using Angular 17 and .NET 8 APIs, increasing incident reporting efficiency by 90%.
                        </Paragraph>
                        <AditionalSection>Key Technologies: Python, Django, Swift, SwiftUI, Next.js, React, Angular 17, .NET 8, Azure AD, AWS.</AditionalSection>
                    </BioSection>
                    <BioSection>
                        <BioYear>October, 2023 - October, 2024</BioYear>
                        <ProfessionSection>Software Engineer Intern</ProfessionSection>
                        <Link href='https://tucambista.pe' isExternal>
                            Tucambista
                        </Link>
                        <Paragraph>
                            Created microservices for Tucambista and Pacífico Seguros using .NET 8, CQRS, Clean
                            Architecture, and Azure Functions. Built &quot;Tucambista FX&quot;, a full-stack internal tool
                            with ASP.NET Core that streamlined the B2B currency exchange process by 70%. Implemented
                            Azure Storage for payment vouchers, automated customer notifications with SendGrid, and
                            frontend features for life insurance during currency exchange.
                        </Paragraph>
                        <AditionalSection>Key Technologies: ASP.NET Core, .NET 8, Azure Functions, CQRS, Clean Architecture, SendGrid, SQL Server.</AditionalSection>
                    </BioSection>

                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Education
                    </Heading>
                    <BioSection>
                        <BioYear>2016 - 2020</BioYear>
                        <Link href='https://www.facebook.com/cetiandahuasisayan/' isExternal>
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
                        <Link href='https://upc.edu.pe/' isExternal>
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
                        <Link href='https://upc.edu.pe/' isExternal>
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
                        <BioYear>2023 - 2024</BioYear>
                        Bachelor Degree Semester: V and VI at {' '}
                        <Link href='https://upc.edu.pe/' isExternal>
                            UPC
                        </Link>
                        <Paragraph>
                            During my third year, I studied databases, HCI, software design patterns, and algorithmic complexity.
                            I also gained experience with both frontend and backend frameworks. In the Open Source Applications
                            course, I learned Angular, TypeScript, and Spring Boot Framework. In the Web Applications course,
                            I worked with Vue, JavaScript, and the C#.NET Framework. Additionally, in the Algorithmic Complexity
                            course, I developed applications using Python. It was a semester filled with valuable knowledge.
                        </Paragraph>
                    </BioSection>

                    <Section delay={0.2}>
                        <Divider my={6} />
                    </Section>

                    <BioSection>
                        <BioYear>2024 - 2026</BioYear>
                        Bachelor Degree Semesters: VII and VIII at{' '}
                        <Link href='https://upc.edu.pe/' isExternal>
                            UPC
                        </Link>
                        <Paragraph>
                            During my fourth year, I studied software project management, introduction to scientific
                            research, IoT programming, and emerging software architecture. I also completed Machine
                            Learning with Reinforcement Learning at USP. Currently working on my thesis project,
                            Cuadra!, a mobile app for booking sports spaces built with React Native and Expo.
                        </Paragraph>
                    </BioSection>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Knowledge
                        </Heading>
                        <SimpleGrid columns={[2, 3, 3]} gap={6}>
                            <Box>
                                <FaRobot size={30} />
                                <Text mt={2}>AI & Machine Learning</Text>
                            </Box>
                            <Box>
                                <FaCloud size={30} />
                                <Text mt={2}>Cloud & DevOps</Text>
                            </Box>
                            <Box>
                                <FaMobileAlt size={30} />
                                <Text mt={2}>Mobile Development</Text>
                            </Box>
                            <Box>
                                <FaProjectDiagram size={30} />
                                <Text mt={2}>Microservices & REST APIs</Text>
                            </Box>
                            <Box>
                                <FaPuzzlePiece size={30} />
                                <Text mt={2}>Clean Architecture & DDD</Text>
                            </Box>
                            <Box>
                                <FaMicrochip size={30} />
                                <Text mt={2}>IoT Programming</Text>
                            </Box>
                            <Box>
                                <FaTasks size={30} />
                                <Text mt={2}>Software Project Management</Text>
                            </Box>
                            <Box>
                                <FaFlask size={30} />
                                <Text mt={2}>Scientific Research</Text>
                            </Box>
                            <Box>
                                <FaCheckDouble size={30} />
                                <Text mt={2}>Test-Driven Development</Text>
                            </Box>
                        </SimpleGrid>
                    </Section>

                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Skills
                        </Heading>
                        <Stack>
                            <HStack align="flex-start">
                                <Icon as={FaCode} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    Frontend: React, Next.js, Angular, TypeScript, JavaScript, Vue.js.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaServer} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    Backend: C#, .NET, ASP.NET Core, Node.js, NestJS, Python, Django, Go.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaRobot} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    AI & Cloud: OpenAI APIs, Azure AI, Azure Functions, AWS, Docker, Kubernetes, CI/CD, GitHub Actions.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaDatabase} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    Databases: SQL Server, PostgreSQL, MySQL, MongoDB.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaPuzzlePiece} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    Architecture: REST APIs, Microservices, CQRS, Clean Architecture, Domain-Driven Design, gRPC.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaMobileAlt} color="teal.500" boxSize={6} mt={1} />
                                <Paragraph>
                                    Mobile: React Native, Swift, Flutter.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaGlobe} color="blue.400" boxSize={6} mt={1} />
                                <Paragraph>
                                    Languages: Native Spanish, Advanced English.
                                </Paragraph>
                            </HStack>

                            <HStack align="flex-start">
                                <Icon as={FaAward} color="blue.400" boxSize={6} mt={1} />
                                <Paragraph>
                                    Achievements: Top 4 Belcorp&apos;s Hackathon v5 Global, Top 3 DigieduHack 2025.
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
                                href="https://www.linkedin.com/in/ortegaleonel/"
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
