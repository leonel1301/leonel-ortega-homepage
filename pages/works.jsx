import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem, GridItemsStyle } from '../components/grid-item';
import thumbLywOs from '../public/images/works/lead-your-way_01_os.png';
import thumbLywAw from '../public/images/works/lead-your-way_01_aw.png';
import thumbHero from '../public/images/extinct-hero.png';
import thumbFreelancer from '../public/images/works/freelancer-landing-page-01.png';
import thumbStudyUp from '../public/images/works/studyUp_01.png';
import thumbCriptografia from '../public/images/works/criptografia-rsa_01.png';
import restApi from '../public/images/works/rest-api.jpg';
import express from '../public/images/works/express.png';
import pokeapi from '../public/images/works/pokeapi.png';
import rickandmorty from '../public/images/works/rick-and-morty-1.png';
import Layout from '../components/layouts/article';

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <GridItemsStyle />
                <Heading as={'h3'} mb={4} fontSize="xl">
                    Works
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <WorkGridItem
                        id="study-up"
                        title="Study Up Landing Page"
                        thumbnail={thumbStudyUp}
                    >
                        A landing page made with HTML, CSS and JavaScript.
                </WorkGridItem>
                <WorkGridItem
                        id="rsa-cryptography"
                        title="RSA Cryptography"
                        thumbnail={thumbCriptografia}
                    >
                        RSA Cryptography university project using HTML, CSS and JavaScript.
                </WorkGridItem>
                <WorkGridItem
                        id="forever-pets-home"
                        title="Rest API Forever Pets Home"
                        thumbnail={restApi}
                    >
                        Rest Api with .NET Framework and Clean Architecture
                </WorkGridItem>
                <WorkGridItem
                        id="todo-app-express"
                        title="Rest API Todo Tasks"
                        thumbnail={express}
                    >
                        Rest Api with Express.js Framework
                </WorkGridItem>
                <WorkGridItem
                        id="pokeapi-app"
                        title="Pokeapi with React and Vite"
                        thumbnail={pokeapi}
                    >
                        Frontend Project with React.js
                </WorkGridItem>
                <WorkGridItem
                        id="rick-and-morty"
                        title="Rick and Morty App with Vue.js"
                        thumbnail={rickandmorty}
                    >
                        Frontend Project with Vue.js
                </WorkGridItem>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <WorkGridItem
                        id="lead-your-way-os"
                        title="Lead Your Way Open Source Version"
                        thumbnail={thumbLywOs}
                    >
                        Website with Angular in frontend and Spring Boot Framework in Backend.
                    </WorkGridItem>
                    <WorkGridItem
                        id="lead-your-way-aw"
                        title="Lead Your Way Web Apps Version"
                        thumbnail={thumbLywAw}
                    >
                        Website with Vue in frontend and C.NET Framework in Backend.
                    </WorkGridItem>
                    
                </SimpleGrid>
                </Section>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>

                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Works
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <WorkGridItem
                        id="extinct-hero"
                        title="Extinct Hero"
                        thumbnail={thumbHero}
                    >
                        2D video game made with C++ using OOP.
                    </WorkGridItem>
                    <WorkGridItem
                        id="leonel-freelancer"
                        title="Freelancer Landing Page"
                        thumbnail={thumbFreelancer}
                    >
                        A product landing page made with HTML and CSS.
                    </WorkGridItem>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Works;
