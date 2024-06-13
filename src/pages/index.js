import { Box, Button, Container, Grid, Paper, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import styles from './index.module.css';
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import SeparatedList from "@/components/separated_list";
import CorneredBox from "@/components/cornered";
import SkillsList from "@/components/skills_list";
import ProjectCard from "@/components/project_card";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const myTheme = createTheme({
    typography: {
        posterheader: {
            // fontFamily: '"Oswald", sans-serif',
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 'bold',
            fontSize: '60px',
            // color: '#c60327',
        },
        subheader: {
            fontFamily: '"Orbitron", sans-serif',
            // 'Oswald' 'Rokkitt', 'Orbitron'
            // fontWeight: 'bold',
            fontSize: '20px',
        },
        posterbody: {
            fontFamily: '"Edu TAS Beginner", cursive',
            fontSize: '20px',
        },
        cardheader: {
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '5em',
        },
        astral: {
            fontFamily: '"Orbitron", sans-serif',
            fontSize: '200px',
        },
        cardbody: {
            fontFamily: '"Edu TAS Beginner", cursive',
            fontSize: '30px',
        },
        def: {
            fontFamily: '"Orbitron", sans-serif',
        },
    },
    palette: {
        ochre: {
            main: '#ff4da6',
            light: '#f98bf8',
            dark: '#f98bf8',
            contrastText: '#fff',
        },
    },
});

export default function PersonalHome() {
    const [elev, setElev] = useState(10);
    
    return (
        <ThemeProvider theme={myTheme}>
        <div className={styles.main}>
            <Head>
            </Head>
            <div className={styles.backImage}>
            <Box sx={{width: 1, height: 1}}>
                <Box
                    component="img"
                    sx={{
                        height: 1, width: 1, objectFit: 'cover'
                    }}
                    src='https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?cs=srgb&dl=pexels-steve-1789968.jpg&fm=jpg&_gl=1*1mjf9an*_ga*MzIzNDMyODgxLjE3MTgxNTUyNzc.*_ga_8JE65Q40S6*MTcxODE1NTI3Ni4xLjEuMTcxODE1NTMxNS4wLjAuMA..'
                    />
            </Box>
            </div>
            
            <Box className={styles.contentcontain} sx={{width: {md: '80%', sm: '95%'}}}>
            <div onMouseOver={() => {setElev(20)}} onMouseOut={() => {setElev(5)}} style={{width: '100%'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        // m: 1,
                        width: 1,
                        // height: '40vh',
                        padding: '30px',
                        // overflow: 'hidden',
                        // margin: '30px',
                        borderRadius: '10px',
                        opacity: 1,
                        },
                    }}
                    >
                        <Paper elevation={elev}>
                            <CorneredBox cornerRad='30px' topLeftCol='#0afce4' bottomRightCol='#fc0fe4' width='250px' height='30%'>
                                <Box sx={{margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="posterheader" style={{textTransform: 'uppercase', textShadow: '#992 1px 0 10px', textAlign: 'center', letterSpacing: '2px', wordSpacing: '2px'}}>
                                    I am Preet Mistry
                                </Typography>
                                <Box>
                                <Typography variant="subheader" style={{textTransform: 'uppercase'}}>
                                    <SeparatedList 
                                        items={
                                            ['Software Developer', 'Web Developer', 'Machine Learning Developer', 'Tinkerer']
                                        }
                                    />
                                </Typography>
                                </Box>
                                <div style={
                                    {
                                        width: '15vw', 
                                        height: '15vw',
                                        minHeight: '200px',
                                        minWidth: '200px', 
                                        borderRadius: '50%', 
                                        overflow: 'hidden'
                                    }
                                    }>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 1, width: 1,
                                        }}
                                        src="/profboy.jpg"
                                        />
                                </div>
                                <Typography variant="posterbody" style={{width: '70%', gap: '0px', letterSpacing: '1px', border: 'solid pink 0px', borderRadius: '4px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                    I graduated as a computer engineer from the University of Toronto in 2024. Currently, I am doing deep learning research in chemistry at the MSRG group.
                                </Typography>
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <Box sx={{display: 'flex', gap: '10px', margin: '10px'}}>
                                            <SocialIcon target="_blank" url='https://www.linkedin.com/in/preet-mistry' />
                                            <SocialIcon target="_blank" url='https://www.github.com/pmistry9597' />
                                        </Box>
                                        <div style={{display: 'flex', gap: '10px', margin: '10px'}}>
                                            <Button onClick={() => {
                                                let elem = document.getElementById('content');
                                                if (elem) {
                                                    elem.scrollIntoView({behavior: "smooth"});
                                                }
                                            }} variant="contained" size="large" color="ochre">Find Out More</Button>
                                            <Button target='_blank' href='/preet_mistry_resume.pdf' variant="outlined" size="large" color="ochre">Resume</Button>
                                        </div>
                                        <Typography variant="cardheader" sx={{fontSize: '16px', padding: '10px', justifyContent: 'center', alignItems: 'center'}}>
                                            Built with Material UI and Next.js
                                        </Typography>
                                    </Box>
                                </Box>
                            </CorneredBox>
                        </Paper>
                    </Box>
            </div>
            <Container disableGutters id='content' maxWidth={false} sx={{zIndex: 2, padding: '0px', margin: '0px', width: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ background: 'rgba(200,200,200,1)', 
                        // height: '100vh', 
                        width: 1,
                        borderRadius: '10px', 
                        // padding: '20px',
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center', }} >
                            <Paper elevation={10} style={{width: '100%', borderRadius: '5px'}}>
                            <Box sx={{position: 'relative', borderRadius: '5px', padding: '40px', backgroundColor: '#55e', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                    <Typography variant="cardheader" style={{color: 'white'}}>
                                        About Me
                                    </Typography>
                                    <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', height: 1, width: 1, display: 'flex', opacity: 0.5, backgroundClip: 'text', backgroundImage: 'linear-gradient(0deg, #fff 0%, transparent 100%)', transform: 'rotateX(180deg)', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant="astral" style={{color: 'transparent', transform: 'translate(0px, -0%)',}}>
                                            <div>About Me</div>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                            <Box sx={{width: 1}}>
                            <Paper elevation={10} style={{margin: '20px'}}>
                                <Box sx={{bgcolor: '#e0e', borderRadius: '5px', flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                    <Box sx={{margin: '20px', color: 'white', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant="cardheader" style={{fontSize: '70px', textShadow: '#999 5px 5px 10px'}}>
                                            Skills
                                        </Typography>
                                    </Box>
                                    <Box sx={{maxWidth: 0.6, margin: '20px', fontSize: '20px', flexWrap: 'wrap', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <SkillsList items={[
                                                            ['C++/C', 'blueviolet'], 
                                                            ['Python', 'orange'], 
                                                            ['Java', 'red'],
                                                            ['Javascript', '#dd0'],
                                                            ['Rust', '#f33'], 
                                                            ['SQL', 'lightblue'],
                                                            ['CSS', 'blue'],
                                                            ['PyTorch', '#f63'],
                                                            ['Docker', '#09e'],
                                                            ['Deep Learning', '#f57'],
                                                            ['React', '#09f'],
                                                            ['Angular', '#d22'],
                                                            ['Amazon Web Services (AWS)', 'orange'],
                                                            ['NodeJS', '#0c5'],
                                                        ]} spacing={2} />
                                        <Box sx={{padding: '10px'}}>
                                        <Typography variant="cardbody" style={{maxHeight: '5px', fontSize: '20px', color: 'white', fontWeight: 'bold',}}>
                                            Don't forget to check out my <Link target="_blank" href='/preet_mistry_resume.pdf' style={{}}>resume</Link>!
                                        </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                            </Box>
                            <Box sx={{width: 1}}>
                            <Paper elevation={10} style={{margin: '20px', padding: '10px', borderRadius: '5px', flexGrow: 5, overflow: 'hidden'}}>
                                <CorneredBox cornerRad='15px' topLeftCol='#4f4' bottomRightCol='#f22' width='20%' height='60%'>
                                <Box sx={{padding: '40px', backgroundColor: 'white', display: 'flex', justifyContent: 'center'}}>
                                    <Typography variant="cardbody" style={{}}>
                                        <p style={{margin: '5px', textAlign: 'center'}}>
                                        I have a passion for building things. At the same time, I appreciate having new knowledge.
                                        My creations can exist either in software, or have a more a physical manifestation.</p>

                                        <p style={{margin: '5px', textAlign: 'center'}}>On my own time, I dragon boat, play the piano, and practice jiu-jitsu.</p>
                                    </Typography>
                                </Box>
                                </CorneredBox>
                            </Paper>
                            </Box>
                            {/* Spacer */}
                            <Box sx={{width: 1}}></Box>
                            <Paper elevation={10} style={{width: '100%'}}>
                                <Box sx={{position: 'relative', padding: '40px', backgroundColor: '#f11', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                    <Box>
                                        <Typography variant="cardheader" style={{color: 'white'}}>
                                            Projects
                                        </Typography>
                                    </Box>
                                    <Box sx={{position: 'absolute', top: 0, left: 0, height: 1, width: 1, display: 'flex', opacity: 0.6, backgroundClip: 'text', backgroundImage: 'linear-gradient(0deg, #fff 0%, transparent 100%)', transform: 'rotateX(180deg)', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant="astral" style={{color: 'transparent'}}>
                                            <div>Projects</div>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                            <Box sx={{width: 1}}>
                            <Paper elevation={10} style={{margin: '20px', padding: '10px', borderRadius: '5px', flexGrow: 5, overflow: 'hidden'}}>
                                <Box sx={{padding: '40px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                    <Box sx={{width: 1}}>
                                        <Grid container spacing={10} direction='row' justifyContent='start'>
                                            <Grid item>
                                                <ProjectCard title='Climate Hack 2022' body='
                                                    My submission for Climate Hack 2022. I managed to placed 14th out of over 130 participants!
                                                '
                                                skills={[['Python', 'orange'],['Deep Learning', '#f57'],['PyTorch', '#f63'],]} 
                                                viewrepo='https://github.com/pmistry9597/Climate-Hack-2022'
                                                />
                                            </Grid>
                                            <Grid item>
                                                <ProjectCard title='Reinforcement Learning Algorithms Demo' body='
                                                    A demonstration of some prominent reinforcement learning algorithms.
                                                '
                                                skills={[['Python', 'orange'],['Deep Learning', '#f57'],['PyTorch', '#f63'],]}  
                                                viewrepo='https://github.com/pmistry9597/Reinforcement-Learning-Algo-Demo'
                                                />
                                            </Grid>
                                            <Grid item>
                                                <ProjectCard title='Space Explorer' body='
                                                    Space game, allows you to learn about the solar system, gravity, and orbits! 
                                                '
                                                skills={[['Javascript', '#dd0']]}
                                                viewrepo='https://github.com/pmistry9597/Space-Explorer'
                                                />
                                            </Grid>
                                            <Grid item>
                                                <ProjectCard title='Circuit Builder' body='
                                                    Circuit game with lessons and a simulator.
                                                '
                                                skills={[['Javascript', '#dd0']]}
                                                viewrepo='https://github.com/pmistry9597/Circuit-Builder'
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{padding: '10px'}}>
                                        <Typography variant="cardbody" style={{maxHeight: '5px', fontSize: '30px', padding: '30px'}}>
                                            Many more can be found on my <Link target="_blank" href='https://github.com/pmistry9597' style={{}}>GitHub!</Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                            </Box>
                </Box>
            </Container>
            </Box>
            </div>
        </ThemeProvider>
        )
}