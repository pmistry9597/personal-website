import { Box, Button, Container, Paper, Typography, createTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import backIm from '../../gr8/0.jpg';
import profboy from '../../profboy.jpg'
import styles from './index.module.css';
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import SeparatedList from "@/components/separated_list";
import CorneredBox from "@/components/cornered";
import SkillsList from "@/components/skills_list";
// https://www.pexels.com/photo/view-of-countryside-under-evening-purple-sky-544268/

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
            fontSize: '80px',
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Edu+TAS+Beginner:wght@400..700&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.backImage}>
            <Image 
            src={backIm}
            width={0}
            height={0}  
            layout={'fill'} 
            // objectFit={'contain'}
            />
            </div>
            
            <div className={styles.contentcontain}>
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
                        margin: '30px',
                        borderRadius: '10px',
                        opacity: 1,
                        },
                    }}
                    >
                        <Paper elevation={elev}>
                            <CorneredBox cornerRad='30px' topLeftCol='#0afce4' bottomRightCol='#fc0fe4' width='250px' height='30%'>
                                <Box sx={{margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography variant="posterheader" style={{textTransform: 'uppercase', textShadow: '#992 1px 0 10px', letterSpacing: '2px', wordSpacing: '2px'}}>
                                    I am Preet Mistry
                                </Typography>
                                <Typography variant="subheader" style={{textTransform: 'uppercase'}}>
                                    <SeparatedList 
                                        items={
                                            ['Software Developer', 'Web Developer', 'Machine Learning Developer', 'Tinkerer']
                                        }
                                    />
                                </Typography>
                                <div style={
                                    {
                                        // margin: '20px',
                                        width: '300px', 
                                        height: '300px',
                                        minHeight: '300px', 
                                        borderRadius: '50%', 
                                        overflow: 'hidden'
                                    }
                                    }>
                                <Image 
                                    src={profboy}
                                    width={0}
                                    height={0}
                                    style={{ width: '100%', height: '100%' }} // optional
                                />
                                </div>
                                <Typography variant="posterbody" style={{width: '70%', gap: '0px', letterSpacing: '1px', border: 'solid pink 0px', borderRadius: '4px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                    I graduated as a computer engineer from the University of Toronto in 2024. Currently, I am doing deep learning research in chemistry at the MSRG group.
                                </Typography>
                                <div style={{display: 'flex', gap: '40px', margin: '10px'}}>
                                    <Button variant="outlined" size="large" color="ochre">Find Out More</Button>
                                    <Button variant="contained" size="large" color="ochre">Contact Me!</Button>
                                </div>
                                </Box>
                            </CorneredBox>
                        </Paper>
                    </Box>
            </div>
            <div style={{zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px'}}>
            <Container maxWidth={false} fixed style={{zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px'}}>
                <Box sx={{ background: 'rgba(200,200,200,1)', 
                        // height: '100vh', 
                        width: 1,
                        borderRadius: '5px', 
                        // padding: '20px',
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center', }} >
                            <Paper elevation={10} style={{width: '100%'}}>
                            <Box sx={{position: 'relative', padding: '40px', backgroundColor: '#55e', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                    <Typography variant="cardheader" style={{color: 'white'}}>
                                        About Me
                                    </Typography>
                                    <Box sx={{position: 'absolute', top: 0, left: 0, height: 1, width: 1, display: 'flex', opacity: 0.4, backgroundClip: 'text', backgroundImage: 'linear-gradient(0deg, #fff 0%, transparent 100%)', transform: 'rotateX(180deg)', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant="astral" style={{color: 'transparent', transform: 'translate(0px, -0%)',}}>
                                            About Me
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                            <Box sx={{width: 1}}>
                            <Paper elevation={10} style={{margin: '20px', padding: '10px', borderRadius: '5px', flexGrow: 5, overflow: 'hidden'}}>
                                <CorneredBox cornerRad='30px' topLeftCol='#4f4' bottomRightCol='#f22' width='20%' height='60%'>
                                <Box sx={{padding: '100px', backgroundColor: 'white', display: 'flex', justifyContent: 'center'}}>
                                    <Typography variant="cardbody" style={{}}>
                                        <p style={{margin: '5px', textAlign: 'center'}}>
                                        I have a passion for building things while at the same time appreciating new knowledge.
                                        My creations can exist either in software, or have a more a physical manifestation.</p>

                                        <p style={{margin: '5px', textAlign: 'center'}}>On my own time, I dragon boat, play the piano, and practice jiu-jitsu.</p>
                                    </Typography>
                                </Box>
                                </CorneredBox>
                            </Paper>
                            </Box>
                            <Box sx={{width: 1}}>
                            <Paper elevation={10} style={{margin: '20px'}}>
                                <Box sx={{bgcolor: '#e0e', borderRadius: '5px', flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{padding: '40px', color: 'white', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography variant="cardheader" style={{fontSize: '70px', textShadow: '#999 5px 5px 10px'}}>
                                        Skills
                                    </Typography>
                                    </Box>
                                    <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <SkillsList items={[
                                                            ['C++/C', 'blueviolet'], 
                                                            ['Python', 'orange'], 
                                                            ['Java', 'red'],
                                                            ['Javascript', '#dd0'],
                                                            ['SQL', 'lightblue'],
                                                            ['CSS', 'blue'],
                                                            ['Rust', '#f33'], 
                                                        ]} />
                                    </Box>
                                </Box>
                            </Paper>
                            </Box>
                            {/* Spacer */}
                            <Box sx={{width: 1}}></Box>
                            <Paper elevation={10} style={{width: '100%'}}>
                                <Box sx={{position: 'relative', padding: '40px', backgroundColor: '#f11', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                                    <Typography variant="cardheader" style={{color: 'white'}}>
                                        Projects
                                    </Typography>
                                    <Box sx={{position: 'absolute', top: 0, left: 0, height: 1, width: 1, display: 'flex', opacity: 0.5, backgroundClip: 'text', backgroundImage: 'linear-gradient(0deg, #fff 0%, transparent 100%)', transform: 'rotateX(180deg)', justifyContent: 'center', alignItems: 'center'}}>
                                        <Typography variant="astral" style={{color: 'transparent'}}>
                                            <div>Projects</div>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                </Box>
            </Container>
            </div>
            </div>
        </div>
        </ThemeProvider>
        )
}